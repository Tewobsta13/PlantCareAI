import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';
import SampleBadge from '../SampleBadge';
import { pct } from '../../utils/format';

const PILL = {
  healthy: { wrap: 'bg-secondary-container text-on-secondary-container', dot: 'bg-secondary' },
  oomycete: { wrap: 'bg-error-container text-on-error-container', dot: 'bg-error' },
  default: { wrap: 'bg-[#FEF3C7] text-[#B45309]', dot: 'bg-[#D97706]' },
};

export default function ResultHeader({ result, onDownload }) {
  const navigate = useNavigate();
  const { prediction, specimen } = result;
  const pill = PILL[prediction.category] ?? PILL.default;
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs">
        <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant font-code-mono text-code-mono">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container font-medium text-primary-container">
            <Icon name="biotech" size={15} /> Specimen #{specimen.id}
          </span>
          <span className="text-outline">/</span>
          <span className="font-body-sm text-body-sm font-medium text-on-surface">
            {specimen.crop_common_name} ({specimen.crop_scientific_name})
          </span>
          <span className="text-outline">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{specimen.location_label}</span>
        </div>
        <div className="flex flex-wrap items-center gap-space-md pt-1">
          <h1 className="font-headline-lg text-headline-lg md:font-headline-xl md:text-headline-xl text-primary-container tracking-tight">
            {prediction.label}{' '}
            <span className="font-body-lg text-body-lg text-on-surface-variant italic font-normal">({prediction.scientific_name})</span>
          </h1>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${pill.wrap}`}>
            <span className={`w-2 h-2 rounded-full ${pill.dot} animate-pulse`}></span>
            <span className="font-label-md text-label-md font-semibold">{prediction.status_label}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm self-start lg:self-center">
        <div className="hidden sm:flex flex-col items-end pr-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Inference Metric</span>
          <span className="font-headline-sm text-headline-sm text-secondary font-bold flex items-center gap-space-xs">
            {pct(prediction.confidence)} Confidence <SampleBadge />
          </span>
        </div>
        <button
          type="button"
          onClick={() => navigate('/detect')}
          className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary-container rounded-lg font-label-lg text-label-lg transition-all active:scale-[0.98]"
        >
          <Icon name="add_photo_alternate" size={20} /> <span>Analyze Another Image</span>
        </button>
        <button
          type="button"
          onClick={onDownload}
          className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-secondary text-on-secondary hover:bg-primary-container rounded-lg font-label-lg text-label-lg shadow-sm transition-all active:scale-[0.98]"
          aria-label="Download field report"
        >
          <Icon name="picture_as_pdf" size={18} /> <span className="hidden md:inline">Download Field Report</span>
        </button>
      </div>
    </div>
  );
}
