import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiseaseCard from '../components/library/DiseaseCard';
import DifferentialMatrix from '../components/library/DifferentialMatrix';
import FilterPanel from '../components/library/FilterPanel';
import { CatalogHeading, ContextBar } from '../components/library/LibraryHeader';
import ValidationNotice from '../components/library/ValidationNotice';
import Icon from '../components/Icon';
import SampleBadge from '../components/SampleBadge';
import { DISEASES } from '../data/diseases';

export default function Library() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [crop, setCrop] = useState('tomato');
  const [severity, setSeverity] = useState('all');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DISEASES.filter((d) => {
      if (crop !== 'all' && d.crop !== crop) return false;
      if (severity !== 'all' && d.severity !== severity) return false;
      if (!q) return true;
      return [d.name, d.scientific, d.summary, d.practice.text, d.matrix.marker, d.matrix.pathogenType].join(' ').toLowerCase().includes(q);
    });
  }, [query, crop, severity]);

  const reset = () => {
    setQuery('');
    setCrop('tomato');
    setSeverity('all');
  };
  const cropLabel = crop === 'all' ? 'all crops' : crop === 'tomato' ? 'Solanum lycopersicum' : crop;
  const noDataForCrop = crop !== 'all' && crop !== 'tomato';

  return (
    <>
      <ContextBar />
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin pt-space-xl pb-space-lg">
        <CatalogHeading />
        <FilterPanel {...{ query, setQuery, crop, setCrop, severity, setSeverity }} />
      </section>
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin pb-space-md">
        <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap" aria-live="polite">
            <span className="font-semibold text-primary-container">
              {visible.length} Specimen {visible.length === 1 ? 'Entry' : 'Entries'} Displayed
            </span>
            <span>— Filtered by {cropLabel}</span>
          </div>
          <SampleBadge label="Illustrative content" className="hidden sm:inline-flex" />
        </div>
      </section>
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin pb-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {visible.map((d) => (
            <DiseaseCard key={d.id} disease={d} onOpen={(id) => navigate(`/results?sample=${id}`)} />
          ))}
          {visible.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface-container-lowest rounded-xl p-space-xl sm:p-space-2xl text-center flex flex-col items-center justify-center gap-space-md shadow-sm">
              <Icon name="search_off" size={48} className="text-outline" />
              <h3 className="font-headline-md text-headline-md text-primary-container">
                {noDataForCrop ? 'No Sample Entries For This Crop Yet' : 'No Matching Botanical Records Found'}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                {noDataForCrop
                  ? 'This demo only includes tomato profiles. Other crops will appear here as the library grows.'
                  : 'Adjust your active query or clear severity filters to explore the broad solanaceous reference archive.'}
              </p>
              <button
                type="button"
                onClick={reset}
                className="px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-secondary transition-all"
              >
                Reset Filter Selections
              </button>
            </div>
          )}
        </div>
      </section>
      <DifferentialMatrix />
      <ValidationNotice />
    </>
  );
}
