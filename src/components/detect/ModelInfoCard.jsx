import Icon from '../Icon';
import SampleBadge from '../SampleBadge';

/** Placeholder describing the (not yet connected) model. Stitch named a specific architecture and latency. */
export default function ModelInfoCard() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
          <Icon name="memory" size={26} />
        </div>
        <div>
          <div className="font-label-lg text-label-lg text-primary-container font-semibold flex flex-wrap items-center gap-space-sm">
            Classification model <SampleBadge label="Placeholder" />
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            Planned PyTorch classifier behind a FastAPI service. Not connected in this build.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 font-code-mono text-code-mono text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg shrink-0">
        <span className="w-2 h-2 rounded-full bg-outline"></span> STATUS: NOT CONNECTED
      </div>
    </div>
  );
}
