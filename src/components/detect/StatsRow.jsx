import SampleBadge from '../SampleBadge';

export default function StatsRow() {
  return (
    <div className="mt-space-2xl">
      <div className="mb-space-sm">
        <SampleBadge label="Sample figures — no model connected" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Taxonomy Library</span>
          <div className="font-headline-lg text-headline-lg text-primary-container mt-1 font-bold">114+</div>
          <span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">compost</span> Foliar Pathogens
          </span>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Model Confidence</span>
          <div className="font-headline-lg text-headline-lg text-primary-container mt-1 font-bold">98.4%</div>
          <span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">verified</span> Sample value
          </span>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Average Inference</span>
          <div className="font-headline-lg text-headline-lg text-primary-container mt-1 font-bold">
            240
            <span className="text-sm font-normal">ms</span>
          </div>
          <span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">bolt</span> Sample value
          </span>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Crops Supported</span>
          <div className="font-headline-lg text-headline-lg text-primary-container mt-1 font-bold">38</div>
          <span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">eco</span> Placeholder
          </span>
        </div>
      </div>
    </div>
  );
}
