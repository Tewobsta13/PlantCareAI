import Icon from '../Icon';

export default function AdvisoryNotice() {
  return (
    <div className="bg-surface-container-low rounded-xl p-space-md md:p-space-lg flex items-start gap-space-md">
      <Icon name="policy" size={28} className="text-[#B45309] shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <span className="font-label-lg text-label-lg font-semibold text-primary-container">
          Agronomic Diagnostic &amp; Prototype Advisory Notice
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          This frontend prototype shows pre-written sample results. No AI model is connected and no inference has been performed on any
          image. Even once a model is connected, AI predictions will be preliminary and should not replace laboratory tissue or pathogen
          assays, or certified agronomic diagnosis, before any treatment decisions.
        </p>
      </div>
    </div>
  );
}
