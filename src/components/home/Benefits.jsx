import Icon from '../Icon';
import SampleBadge from '../SampleBadge';
import { BENEFITS } from '../../data/home';

export default function Benefits() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-space-2xl">
      <div className="max-w-[1440px] mx-auto px-margin-mobile sm:px-margin">
        <div className="max-w-3xl mb-space-xl">
          <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider font-semibold inline-flex items-center gap-space-sm flex-wrap">
            Empirical Impact
            <SampleBadge label="Sample figures" className="!bg-white/10 !text-on-primary-container !border-on-primary-container/50" />
          </span>
          <h2 className="font-headline-xl-mobile sm:font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-primary mt-space-xs">
            Built for Commercial Agronomy &amp; Sustainable Farm Management
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mt-space-xs">
            Reduce chemical pesticide spending by catching fungal outbreaks before they become systemic epidemics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {BENEFITS.map((b) => (
            <div key={b.title} className="bg-tertiary-container/80 p-space-md sm:p-space-lg rounded-2xl flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <Icon name={b.icon} size={32} className="text-secondary-fixed" />
                <h3 className="font-headline-sm text-headline-sm text-on-primary">{b.title}</h3>
                <p className="font-body-md text-body-md text-on-primary-container">{b.body}</p>
              </div>
              <div className="pt-space-md flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-secondary-fixed font-bold">{b.value}</span>
                <span className="font-body-sm text-body-sm text-on-primary-container">{b.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
