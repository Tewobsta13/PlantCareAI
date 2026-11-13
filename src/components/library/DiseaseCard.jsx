import { images } from '../../assets/images';
import Icon from '../Icon';

// Per-tone styling taken from the five Stitch cards.
const TONES = {
  healthy: {
    badge: 'bg-secondary-container text-on-secondary-container',
    dot: 'bg-secondary',
    chip: 'text-primary-container',
    taxon: 'text-primary-fixed',
    icon: 'text-secondary-fixed',
    box: 'bg-surface-container-low',
    boxLabel: 'text-secondary',
    btn: 'hover:bg-primary-container hover:text-on-primary group-hover:bg-secondary group-hover:text-on-secondary',
  },
  moderate: {
    badge: 'bg-surface-container-highest text-primary-container',
    dot: 'bg-surface-tint',
    chip: 'text-primary-container',
    taxon: 'text-primary-fixed',
    icon: 'text-secondary-fixed',
    box: 'bg-surface-container-low',
    boxLabel: 'text-secondary',
    btn: 'hover:bg-primary-container hover:text-on-primary group-hover:bg-secondary group-hover:text-on-secondary',
  },
  highrisk: {
    badge: 'bg-surface-container-highest text-on-surface',
    dot: 'bg-error',
    chip: 'text-primary-container',
    taxon: 'text-primary-fixed',
    icon: 'text-secondary-fixed',
    box: 'bg-surface-container-low',
    boxLabel: 'text-secondary',
    btn: 'hover:bg-primary-container hover:text-on-primary group-hover:bg-secondary group-hover:text-on-secondary',
  },
  greenhouse: {
    badge: 'bg-surface-container-highest text-on-surface',
    dot: 'bg-secondary',
    chip: 'text-primary-container',
    taxon: 'text-primary-fixed',
    icon: 'text-secondary-fixed',
    box: 'bg-surface-container-low',
    boxLabel: 'text-secondary',
    btn: 'hover:bg-primary-container hover:text-on-primary group-hover:bg-secondary group-hover:text-on-secondary',
  },
  severe: {
    badge: 'bg-error-container text-on-error-container',
    dot: 'bg-error',
    chip: 'text-error font-bold',
    taxon: 'text-error-container',
    icon: 'text-error-container',
    box: 'bg-error-container/20',
    boxLabel: 'text-error',
    btn: 'hover:bg-error hover:text-on-error group-hover:bg-error group-hover:text-on-error',
  },
};

export default function DiseaseCard({ disease: d, onOpen }) {
  const t = TONES[d.badge.tone];
  return (
    <article className="disease-card group bg-surface-container-lowest rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-surface-container">
          <img
            src={images[d.image]}
            alt={`${d.name} on tomato foliage`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute top-space-md left-space-md flex flex-wrap gap-1.5">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${t.badge} font-semibold shadow-sm`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`}></span>
              {d.badge.label}
            </span>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full font-code-mono text-body-sm bg-surface/90 ${t.chip} backdrop-blur-sm`}
            >
              {d.chip}
            </span>
          </div>
          <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between text-on-primary">
            <div>
              <span className={`font-code-mono text-body-sm ${t.taxon} block`}>TAXON {d.taxon.no}</span>
              <span className="font-label-sm text-label-sm opacity-90">{d.taxon.group}</span>
            </div>
            <Icon name={d.taxon.icon} size={20} className={t.icon} />
          </div>
        </div>
        <div className="p-space-md sm:p-space-lg flex flex-col gap-space-md">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary-container leading-tight">{d.name}</h2>
            <span className="font-code-mono text-body-sm text-on-surface-variant italic">{d.scientific}</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">{d.summary}</p>
          <div className={`${t.box} p-space-md rounded-lg flex flex-col gap-space-xs`}>
            <span className={`font-label-sm text-label-sm ${t.boxLabel} font-semibold uppercase tracking-wider flex items-center gap-1`}>
              <Icon name={d.practice.icon} size={15} /> {d.practice.title}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface">{d.practice.text}</p>
          </div>
        </div>
      </div>
      <div className="px-space-md sm:px-space-lg pb-space-md sm:pb-space-lg pt-0">
        <button
          type="button"
          onClick={() => onOpen(d.id)}
          className={`w-full py-2.5 px-space-md rounded-lg bg-surface-container-high text-primary-container font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 ${t.btn}`}
        >
          <span>View Sample Diagnosis</span>
          <Icon name="arrow_forward" size={18} />
        </button>
      </div>
    </article>
  );
}
