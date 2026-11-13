import { useCallback, useEffect, useRef, useState } from 'react';
import { analyzeLeaf } from '../services/analysisService';

/** Runs an analysis with loading/error state and cancellation. UI never touches the service directly. */
export default function useAnalysis() {
  const [status, setStatus] = useState('idle'); // idle | loading | error
  const [error, setError] = useState(null);
  const controller = useRef(null);

  const cancel = useCallback(() => controller.current?.abort(), []);
  useEffect(() => cancel, [cancel]);

  const run = useCallback(async (input) => {
    controller.current?.abort();
    controller.current = new AbortController();
    setStatus('loading');
    setError(null);
    try {
      const result = await analyzeLeaf(input, { signal: controller.current.signal });
      setStatus('idle');
      return result;
    } catch (e) {
      if (e.name === 'AbortError') return null;
      setError(e.message || 'Something went wrong while analyzing the image.');
      setStatus('error');
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);
  return { status, error, run, cancel, reset, isLoading: status === 'loading' };
}
