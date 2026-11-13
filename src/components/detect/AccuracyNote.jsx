export default function AccuracyNote() {
  return (
    <div className="bg-primary-container text-on-primary rounded-2xl p-space-md sm:p-space-lg shadow-md flex flex-col gap-space-sm relative overflow-hidden">
      <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-secondary/20 pointer-events-none blur-2xl"></div>
      <div className="flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-secondary-fixed text-[24px]">biotech</span>
        <span className="font-headline-sm text-headline-sm text-secondary-fixed">Scientific Accuracy Note</span>
      </div>
      <p className="font-body-md text-body-md text-surface-container-highest">
        Clear lighting and sharp focus generally make any image-based classifier more reliable. Accuracy and calibration figures will be
        reported here once a real model is connected.
      </p>
      <div className="pt-space-xs flex items-center justify-between text-surface-container-high font-label-sm text-label-sm">
        <span>Model: not connected</span>
        <span className="text-secondary-fixed-dim font-code-mono">SAMPLE</span>
      </div>
    </div>
  );
}
