import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin py-space-2xl">
      <div className="mx-auto max-w-xl rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-space-xl text-center shadow-[0_4px_20px_-2px_rgba(23,61,43,0.06)]">
        <Icon name="eco" size={40} className="text-secondary" />
        <h1 className="mt-space-sm font-headline-xl-mobile sm:font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary">
          Page not found
        </h1>
        <p className="mt-space-xs font-body-lg text-body-lg text-on-surface-variant">That address doesn't match any PlantCare AI page.</p>
        <Link
          to="/"
          className="mt-space-lg inline-flex items-center gap-space-xs rounded-lg bg-secondary px-space-lg py-space-md font-label-lg text-label-lg text-on-secondary transition-all hover:bg-primary-container active:scale-[0.98]"
        >
          <Icon name="home" size={18} /> Back to home
        </Link>
      </div>
    </section>
  );
}
