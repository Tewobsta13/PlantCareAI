import Icon from '../Icon';

const card = 'bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col';
const cardTitle = (icon, text) => (
  <div className="flex items-center gap-space-xs text-primary-container">
    <Icon name={icon} size={22} className="text-secondary" />
    <h2 className="font-headline-sm text-headline-sm font-semibold">{text}</h2>
  </div>
);

export function DescriptionCard({ report }) {
  return (
    <div className={`${card} gap-space-sm`}>
      {cardTitle('menu_book', 'Etiology & Disease Description')}
      <p className="font-body-md text-body-md text-on-surface leading-relaxed">{report.description}</p>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm mt-1">
        <Icon name="psychology_alt" size={20} className="text-secondary" />
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          <strong>Agronomic Risk:</strong> {report.risk}
        </span>
      </div>
    </div>
  );
}

export function SignaturesCard({ signatures }) {
  return (
    <div className={`${card} gap-space-md`}>
      <div className="flex items-center justify-between gap-space-sm flex-wrap">
        {cardTitle('fact_check', 'Observed Diagnostic Signatures')}
        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">
          Sample: {signatures.length} of {signatures.length}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
        {signatures.map((s) => (
          <div key={s.label} className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-secondary">
              <Icon name="check_circle" size={18} />
              <span className="font-label-md text-label-md font-semibold text-primary-container">{s.label}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TriggersCard({ triggers }) {
  return (
    <div className={`${card} gap-space-md`}>
      {cardTitle('thermostat', 'Microclimate & Environmental Triggers')}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
        {triggers.map((t) => (
          <div key={t.title} className="flex items-start gap-space-xs">
            <Icon name={t.icon} size={20} className="text-[#B45309] shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-primary-container font-semibold">{t.title}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{t.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
