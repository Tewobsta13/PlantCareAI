import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { ANNOUNCE } from '../../data/home';

export default function AnnounceRibbon() {
  return (
    <section className="w-full bg-surface-container-high py-space-xs px-margin-mobile sm:px-margin text-center">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-space-sm flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          {ANNOUNCE.pill}
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">{ANNOUNCE.text}</span>
        <Link
          to={{ pathname: '/', hash: '#how-it-works' }}
          className="font-label-sm text-label-sm text-secondary hover:text-primary-container inline-flex items-center gap-0.5"
        >
          {ANNOUNCE.linkLabel} <Icon name="arrow_forward" size={14} />
        </Link>
      </div>
    </section>
  );
}
