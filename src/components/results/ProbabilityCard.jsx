import SampleBadge from '../SampleBadge';
import { pct } from '../../utils/format';

export default function ProbabilityCard({ probabilities }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between gap-space-sm flex-wrap">
        <span className="font-headline-sm text-headline-sm text-primary-container flex items-center gap-space-sm">
          Multi-Class Probability <SampleBadge />
        </span>
        <span className="font-code-mono text-code-mono text-on-surface-variant">Top-{probabilities.length}</span>
      </div>
      <div className="flex flex-col gap-space-sm">
        {probabilities.map((p, i) => (
          <div key={p.label} className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-space-sm font-label-md text-label-md">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${i === 0 ? 'bg-secondary' : 'bg-outline-variant'}`}></span>
                <span className={i === 0 ? 'font-semibold text-primary-container' : 'text-on-surface'}>{p.label}</span>
              </div>
              <span className={`font-code-mono shrink-0 ${i === 0 ? 'font-bold text-secondary' : 'text-on-surface-variant'}`}>
                {pct(p.probability)}
              </span>
            </div>
            <div className={`w-full ${i === 0 ? 'h-2.5' : 'h-2'} bg-surface-container rounded-full overflow-hidden`}>
              <div
                className={`h-full ${i === 0 ? 'bg-secondary' : 'bg-outline-variant'} rounded-full transition-all duration-700`}
                style={{ width: `${p.probability * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
