export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total Plant Analyses</span>
          <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[20px]">biotech</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg-mobile text-display-lg-mobile sm:font-display-lg sm:text-display-lg text-primary-container leading-none">
              1,284
            </span>
            <span className="font-label-md text-label-md text-secondary font-semibold inline-flex items-center">
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
              18%
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Scans completed this month</span>
        </div>
        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: '82%' }}></div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Healthy Foliage Verified</span>
          <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[20px]">eco</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg-mobile text-display-lg-mobile sm:font-display-lg sm:text-display-lg text-secondary leading-none">
              982
            </span>
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
              76.5% Healthy Rate
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Optimal chlorophyll response</span>
        </div>
        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
          <div className="bg-secondary-fixed-dim h-full rounded-full" style={{ width: '76.5%' }}></div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Disease Alerts</span>
          <div className="w-9 h-9 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
            <span className="material-symbols-outlined text-[20px]">warning</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg-mobile text-display-lg-mobile sm:font-display-lg sm:text-display-lg text-primary-container leading-none">
              302
            </span>
            <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
              Action Req.
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Early Blight, Powdery Mildew, Mites</span>
        </div>
        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-error">
          <span className="w-2 h-2 rounded-full bg-error"></span>
          <span>14 plots scheduled for treatment</span>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Average Confidence</span>
          <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[20px]">verified</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg-mobile text-display-lg-mobile sm:font-display-lg sm:text-display-lg text-primary-container leading-none">
              96.2%
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Sample</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Sample value, not validated</span>
        </div>
        <div className="flex items-center gap-1 text-on-surface-variant font-code-mono text-code-mono">
          <span>σ = n/a</span>
          <span className="text-secondary font-semibold ml-auto">Calibration: n/a</span>
        </div>
      </div>
    </div>
  );
}
