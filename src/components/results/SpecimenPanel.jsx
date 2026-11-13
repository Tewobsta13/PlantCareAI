import { useState } from 'react';
import Icon from '../Icon';
import SampleBadge from '../SampleBadge';
import HeatmapOverlay from './HeatmapOverlay';

export default function SpecimenPanel({ result }) {
  const [overlayOn, setOverlayOn] = useState(true);
  const { localization: loc, metrics: m } = result;
  const top = loc.regions[0];
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <Icon name="center_focus_strong" size={22} className="text-secondary" />
          <span className="font-headline-sm text-headline-sm text-primary-container">Optical Scan &amp; Heatmap</span>
        </div>
        <button
          type="button"
          onClick={() => setOverlayOn((v) => !v)}
          aria-pressed={overlayOn}
          disabled={!loc.available}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high hover:bg-secondary-fixed text-primary-container font-label-sm text-label-sm transition-colors disabled:opacity-50"
        >
          <Icon name="layers" size={16} /> <span>Foliar Lesion Overlay: {overlayOn && loc.available ? 'ON' : 'OFF'}</span>
        </button>
      </div>
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container flex items-center justify-center group shadow-inner">
        {loc.image_url && (
          <img
            src={loc.image_url}
            alt={`Sample specimen: ${result.prediction.label}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${overlayOn && loc.available ? 'opacity-95' : 'opacity-0'}`}
        >
          {loc.heatmap_url ? (
            <img src={loc.heatmap_url} alt="" className="w-full h-full object-cover" />
          ) : (
            <HeatmapOverlay regions={loc.regions} />
          )}
          {top && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-primary/80 backdrop-blur text-on-primary font-code-mono text-code-mono flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping"></span>
              <span>
                ROI #{top.id}: {(top.confidence * 100).toFixed(1)}% {top.label}
              </span>
            </div>
          )}
        </div>
        {!loc.available && (
          <div className="absolute top-3 left-3 px-2 py-1 rounded bg-primary/80 text-on-primary font-code-mono text-code-mono">
            No lesion regions flagged
          </div>
        )}
        <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded flex items-center justify-between gap-2 text-on-surface-variant font-label-sm text-label-sm shadow-sm">
          <span className="font-code-mono">Chlorotic Margins</span>
          <div className="h-2 w-20 sm:w-32 rounded-full bg-gradient-to-r from-[#A2F5BB] via-[#FDE047] to-[#BA1A1A]"></div>
          <span className="font-code-mono text-[#BA1A1A] font-semibold">Necrotic Core</span>
        </div>
      </div>
      {loc.illustrative && (
        <p className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
          <SampleBadge label="Illustrative overlay" /> Sample specimen photo; this overlay is not derived from an analysis of your image.
        </p>
      )}
      <div className="grid grid-cols-1 min-[460px]:grid-cols-3 gap-space-sm pt-space-xs">
        <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Necrotic Foliar Area</span>
          <span className="font-headline-lg text-headline-lg text-primary-container font-bold mt-1">{m.affected_area_pct.toFixed(1)}%</span>
          <span className="font-body-sm text-body-sm text-[#B45309] font-medium flex items-center gap-1 mt-0.5">
            <Icon name="trending_up" size={14} /> {m.affected_area_tier}
          </span>
        </div>
        <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Pathogen Class</span>
          <span className="font-headline-sm text-headline-sm text-primary-container font-semibold mt-1 break-words">
            {m.pathogen_class}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{m.pathogen_family}</span>
        </div>
        <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Primary Vector</span>
          <span className="font-headline-sm text-headline-sm text-primary-container font-semibold mt-1">{m.primary_vector}</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{m.primary_vector_detail}</span>
        </div>
      </div>
    </div>
  );
}
