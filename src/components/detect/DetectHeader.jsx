import Icon from '../Icon';

export default function DetectHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-xl">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-widest shadow-sm mb-space-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span> Diagnostic Studio • Demo Build
        </div>
        <h1 className="font-display-lg-mobile text-display-lg-mobile sm:font-display-lg sm:text-display-lg text-primary-container tracking-tight leading-none">
          Let&apos;s Check Your Plant&apos;s Health
        </h1>
        <p className="font-body-xl text-body-xl text-on-surface-variant mt-space-sm">
          Upload a crisp foliar photograph. In this demo build the result is a clearly labeled sample; a connected model will later evaluate
          lesion morphology, chlorosis patterns, and sporulation indicators.
        </p>
      </div>
      <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm self-start md:self-auto">
        <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
          <Icon name="science" size={24} />
        </div>
        <div>
          <div className="font-label-md text-label-md text-primary-container">Sample Content</div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">No model · No certification claimed</div>
        </div>
      </div>
    </div>
  );
}
