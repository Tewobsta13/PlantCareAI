import { useCallback, useEffect, useRef, useState } from 'react';
import { getSample } from '../data/samples';
import { formatBytes } from '../utils/format';
import { measureImageQuality } from '../utils/imageQuality';

export const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
export const MAX_BYTES = 25 * 1024 * 1024;
const EMPTY = { status: 'empty', source: null, file: null, sampleId: null, previewUrl: null, meta: null, quality: null, error: null };

/**
 * Image selection state: empty -> ready (upload or built-in sample), with validation,
 * object-URL cleanup, local quality estimates and a shared hidden <input>.
 */
export default function useImageUpload() {
  const [state, setState] = useState(EMPTY);
  const inputRef = useRef(null);
  const urlRef = useRef(null);

  const revoke = () => {
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
  };
  useEffect(() => revoke, []);

  const clear = useCallback(() => {
    revoke();
    if (inputRef.current) inputRef.current.value = '';
    setState(EMPTY);
  }, []);

  const selectFile = useCallback((file) => {
    if (!file) return;
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setState((s) => ({ ...s, error: `“${file.name}” isn't a supported image. Please choose a JPG, JPEG or PNG file.` }));
      return;
    }
    if (file.size > MAX_BYTES) {
      setState((s) => ({ ...s, error: `“${file.name}” is ${formatBytes(file.size)}. The maximum size is 25 MB.` }));
      return;
    }
    revoke();
    const url = URL.createObjectURL(file);
    urlRef.current = url;
    setState({
      ...EMPTY,
      status: 'ready',
      source: 'upload',
      file,
      previewUrl: url,
      meta: { name: file.name, size: formatBytes(file.size), dimensions: null },
    });
    const img = new Image();
    img.onload = () => {
      if (urlRef.current !== url) return;
      let quality = null;
      try {
        quality = measureImageQuality(img);
      } catch {
        /* leave null */
      }
      setState((s) =>
        s.previewUrl === url ? { ...s, meta: { ...s.meta, dimensions: `${img.naturalWidth} × ${img.naturalHeight} px` }, quality } : s,
      );
    };
    img.onerror = () => {
      if (urlRef.current !== url) return;
      revoke();
      setState({ ...EMPTY, error: `“${file.name}” couldn't be read as an image. Try a different file.` });
    };
    img.src = url;
  }, []);

  const selectSample = useCallback((id) => {
    const sample = getSample(id);
    if (!sample) return;
    revoke();
    if (inputRef.current) inputRef.current.value = '';
    setState({
      ...EMPTY,
      status: 'ready',
      source: 'sample',
      sampleId: id,
      previewUrl: null,
      meta: { name: sample.fileName, size: null, dimensions: null },
      quality: sample.quality,
    });
  }, []);

  const dismissError = useCallback(() => setState((s) => ({ ...s, error: null })), []);
  const openPicker = useCallback(() => inputRef.current?.click(), []);
  const onInputChange = useCallback(
    (e) => {
      selectFile(e.target.files?.[0]);
      e.target.value = '';
    },
    [selectFile],
  );

  return { ...state, inputRef, openPicker, onInputChange, selectFile, selectSample, clear, dismissError };
}
