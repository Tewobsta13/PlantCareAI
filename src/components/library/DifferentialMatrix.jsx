import SampleBadge from '../SampleBadge';
import { DISEASES } from '../../data/diseases';

const DOT = { benign: 'bg-secondary', moderate: 'bg-surface-tint', high: 'bg-error' };
const ACTION = {
  neutral: 'bg-surface-container-high text-primary-container font-semibold',
  critical: 'bg-error-container text-on-error-container font-semibold',
};
const th = 'py-3 px-space-md';

export default function DifferentialMatrix() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin pb-space-2xl">
      <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-lg gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold block">
              Comparative Field Diagnostic
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary-container">Differential Symptoms Matrix</h3>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
            Solanum Pathogen Overview <SampleBadge label="Illustrative" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                <th className={`${th} rounded-l-lg`}>Disease Entity</th>
                <th className={th}>Pathogen Type</th>
                <th className={th}>Primary Diagnostic Marker</th>
                <th className={th}>Favoured Temp</th>
                <th className={th}>Onset</th>
                <th className={`${th} rounded-r-lg text-right`}>Field Action</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md">
              {DISEASES.map((d) => (
                <tr key={d.id} className="hover:bg-surface-container-low/60 transition-colors">
                  <td className="py-4 px-space-md font-semibold text-primary-container">
                    <span className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${DOT[d.severity]}`}></span>
                      {d.id === 'healthy' ? 'Healthy Baseline' : d.name}
                    </span>
                  </td>
                  <td className="py-4 px-space-md font-code-mono text-body-sm text-on-surface-variant">{d.matrix.pathogenType}</td>
                  <td className="py-4 px-space-md text-on-surface-variant">{d.matrix.marker}</td>
                  <td className="py-4 px-space-md font-code-mono text-body-sm">{d.matrix.temp}</td>
                  <td className="py-4 px-space-md font-code-mono text-body-sm">{d.matrix.latency}</td>
                  <td className="py-4 px-space-md text-right">
                    <span
                      className={`px-2 py-1 rounded font-label-sm text-label-sm whitespace-nowrap ${d.matrix.actionTone === 'critical' ? ACTION.critical : d.id === 'healthy' ? 'bg-surface-container text-on-surface-variant' : ACTION.neutral}`}
                    >
                      {d.matrix.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
