import { useState } from 'react';
import { images } from '../../assets/images';
import { getSample } from '../../data/samples';
import Icon from '../Icon';
import SampleBadge from '../SampleBadge';

const Metric = ({ label, value, width, tone = 'bg-secondary' }) => (
  <div className="bg-surface-container-low p-space-sm rounded-xl">
    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{label}</div>
    <div className="font-headline-sm text-headline-sm text-primary-container mt-1">{value == null ? '—' : `${value.toFixed(1)}%`}</div>
    <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2 overflow-hidden">
      <div
        className={`${tone} h-full rounded-full transition-all duration-500`}
        style={{ width: `${Math.min(100, Math.max(0, width ?? 0))}%` }}
      />
    </div>
  </div>
);

export default function UploadCard({ upload, analysis, onAnalyze }) {
  const [dragging, setDragging] = useState(false);
  const { status, source, sampleId, previewUrl, meta, quality, error } = upload;
  const { isLoading, error: analysisError } = analysis;
  const sample = sampleId ? getSample(sampleId) : null;
  const imgSrc = source === 'sample' ? images[sample.image] : previewUrl;

  const dragProps = {
    onDragOver: (e) => {
      e.preventDefault();
      if (!dragging) setDragging(true);
    },
    onDragLeave: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) setDragging(false);
    },
    onDrop: (e) => {
      e.preventDefault();
      setDragging(false);
      if (!isLoading) upload.selectFile(e.dataTransfer.files?.[0]);
    },
  };

  return (
    <div
      {...dragProps}
      id="dropzone"
      className={`relative group bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-xl shadow-md transition-all duration-300 hover:shadow-xl ${dragging ? 'ring-2 ring-secondary ring-offset-2 ring-offset-surface bg-secondary-container/20' : ''}`}
    >
      <div className="absolute top-4 left-4 w-6 h-6 rounded-tl-lg bg-surface-variant/40 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-6 h-6 rounded-tr-lg bg-surface-variant/40 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-6 h-8 rounded-bl-lg bg-surface-variant/40 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 rounded-br-lg bg-surface-variant/40 pointer-events-none"></div>

      <input
        ref={upload.inputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        className="hidden"
        onChange={upload.onInputChange}
        aria-label="Choose a leaf image"
      />
      <input
        id="camera-input"
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          upload.selectFile(e.target.files?.[0]);
          e.target.value = '';
        }}
        aria-label="Take a leaf photo"
      />

      {error && (
        <div
          role="alert"
          className="relative z-10 mb-space-md flex items-start gap-space-sm rounded-xl bg-error-container text-on-error-container p-space-sm"
        >
          <Icon name="error" size={20} className="mt-0.5" />
          <p className="flex-1 font-body-sm text-body-sm">{error}</p>
          <button type="button" onClick={upload.dismissError} aria-label="Dismiss error" className="rounded p-0.5 hover:bg-black/10">
            <Icon name="close" size={18} />
          </button>
        </div>
      )}

      {status === 'empty' ? (
        <div className="flex flex-col items-center justify-center text-center py-space-2xl px-space-md">
          <div className="w-20 h-20 rounded-2xl bg-secondary-container/50 flex items-center justify-center text-secondary mb-space-md group-hover:scale-105 transition-transform duration-300 shadow-sm">
            <Icon name={dragging ? 'file_download' : 'add_a_photo'} size={44} />
          </div>
          <h3 className="font-headline-md text-headline-md text-primary-container mb-space-xs">
            {dragging ? 'Drop your photo to add it' : 'Drag and drop your leaf photograph here'}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg">
            Place the target leaf flat and centered under diffuse daylight for the clearest photo.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-space-md">
            <button
              type="button"
              onClick={upload.openPicker}
              className="cursor-pointer inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg shadow-md hover:bg-primary-container active:scale-95 transition-all"
            >
              <Icon name="file_upload" size={20} />
              <span>Upload Leaf Image</span>
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('camera-input').click()}
              className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container text-primary-container rounded-lg font-label-lg text-label-lg hover:bg-surface-variant transition-colors"
            >
              <Icon name="photo_camera" size={20} />
              <span>Use Camera</span>
            </button>
          </div>
          <div className="mt-space-lg inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
            <Icon name="verified_user" size={14} className="text-secondary" /> Supports JPG, JPEG, and PNG up to 25MB. Images stay in your
            browser.
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-space-lg">
          <div className="flex items-center justify-between gap-space-sm pb-space-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-secondary">
                <Icon name="check" size={18} />
              </span>
              <div className="min-w-0">
                <span className="block truncate font-label-lg text-label-lg text-primary-container font-semibold">{meta.name}</span>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  {source === 'sample' ? 'Built-in demo specimen' : ['Local file', meta.size, meta.dimensions].filter(Boolean).join(' • ')}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-space-xs shrink-0">
              <button
                type="button"
                disabled={isLoading}
                onClick={upload.openPicker}
                className="inline-flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-variant text-primary-container font-label-sm text-label-sm transition-colors disabled:opacity-50"
              >
                <Icon name="sync" size={16} />
                <span>Replace</span>
              </button>
              <button
                type="button"
                disabled={isLoading}
                onClick={upload.clear}
                aria-label="Remove image"
                className="p-1 rounded-lg hover:bg-error-container hover:text-on-error-container text-on-surface-variant transition-colors disabled:opacity-50"
              >
                <Icon name="close" size={18} />
              </button>
            </div>
          </div>

          <div className="relative w-full h-[260px] sm:h-[360px] rounded-xl overflow-hidden shadow-inner bg-primary-container">
            {imgSrc && (
              <img
                src={imgSrc}
                alt={source === 'sample' ? `${sample.label} demo specimen` : 'Your selected leaf photograph'}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/80 via-transparent to-primary/30"></div>
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 text-on-primary">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/60 backdrop-blur-md font-code-mono text-code-mono">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                {source === 'sample' ? 'SAMPLE SPECIMEN' : 'LOCAL PREVIEW'}
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                <Icon name="lens_blur" size={14} /> {isLoading ? 'Running demo…' : 'Not yet analyzed'}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl bg-secondary/10 flex items-center justify-center relative animate-pulse">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <span className="font-code-mono text-code-mono text-secondary-fixed tracking-wider">FRAME GUIDE</span>
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-primary text-secondary-fixed font-code-mono text-[10px]">
                  ALIGNMENT CENTER
                </div>
              </div>
            </div>
            {isLoading && (
              <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-secondary-fixed/40 to-transparent animate-scan-sweep pointer-events-none" />
            )}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-primary">
              <span className="px-2 py-0.5 rounded bg-surface-container-highest/20 backdrop-blur-md font-code-mono text-[11px] text-surface-container-lowest">
                {source === 'sample'
                  ? 'DEMO ASSET'
                  : [meta.size, meta.dimensions].filter(Boolean).join(' · ').toUpperCase() || 'READING IMAGE…'}
              </span>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
              <Metric label="Image Sharpness" value={quality?.sharpness} width={quality?.sharpness} />
              <Metric label="Foliar Coverage" value={quality?.coverage} width={quality?.coverage} />
              <Metric label="Glare Occlusion" value={quality?.glare} width={quality?.glare} tone="bg-secondary-fixed-dim" />
            </div>
            <p className="mt-space-sm flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {source === 'sample' ? <SampleBadge label="Sample values" /> : <SampleBadge label="Rough local estimate" />}
              {source === 'sample'
                ? 'Placeholder photo-quality values for the demo specimen.'
                : 'Simple checks run in your browser, for guidance only.'}
            </p>
          </div>

          {analysisError && (
            <div role="alert" className="flex items-start gap-space-sm rounded-xl bg-error-container text-on-error-container p-space-sm">
              <Icon name="error" size={20} className="mt-0.5" />
              <p className="flex-1 font-body-sm text-body-sm">{analysisError}</p>
              <button type="button" onClick={analysis.reset} aria-label="Dismiss error" className="rounded p-0.5 hover:bg-black/10">
                <Icon name="close" size={18} />
              </button>
            </div>
          )}

          <div className="flex flex-col items-center gap-space-sm pt-space-sm">
            <button
              type="button"
              onClick={onAnalyze}
              disabled={isLoading}
              aria-busy={isLoading}
              className="w-full relative overflow-hidden group inline-flex items-center justify-center gap-space-sm px-space-md sm:px-space-xl py-4 bg-secondary text-on-secondary rounded-xl font-headline-sm text-headline-sm shadow-xl hover:bg-primary-container transition-all active:scale-[0.99] disabled:cursor-wait disabled:hover:bg-secondary"
            >
              <span className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {isLoading ? (
                <Icon name="progress_activity" size={24} className="text-secondary-fixed animate-spin" />
              ) : (
                <Icon name="neurology" size={24} className="text-secondary-fixed" />
              )}
              <span>{isLoading ? 'Preparing sample result…' : analysisError ? 'Try Again' : 'Analyze Leaf Image'}</span>
              {!isLoading && (
                <Icon name="arrow_forward" size={20} className="text-secondary-fixed group-hover:translate-x-1 transition-transform" />
              )}
            </button>
            <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
              Demo build: no AI model runs. You&apos;ll get a clearly labeled <strong>sample</strong> result, not an analysis of this image.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
