import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ActionBar from '../components/results/ActionBar';
import AdvisoryNotice from '../components/results/AdvisoryNotice';
import { DescriptionCard, SignaturesCard, TriggersCard } from '../components/results/KnowledgeCards';
import ManagementCard from '../components/results/ManagementCard';
import ProbabilityCard from '../components/results/ProbabilityCard';
import ReferenceCard from '../components/results/ReferenceCard';
import ResultHeader from '../components/results/ResultHeader';
import SampleBanner from '../components/results/SampleBanner';
import SpecimenPanel from '../components/results/SpecimenPanel';
import useAnalysisStore from '../hooks/useAnalysisStore';
import { getDisease } from '../data/diseases';
import { buildSampleResponse } from '../services/mockAnalysis';

export default function Results() {
  const { result, submission } = useAnalysisStore();
  const [params] = useSearchParams();
  const requested = params.get('sample');
  // Visiting /results directly ("Results Demo") shows a built-in sample (Early Blight by default; ?sample=<id> picks another).
  const data = useMemo(() => {
    if (result && !requested) return result;
    const diseaseId = getDisease(requested) ? requested : 'early-blight';
    return buildSampleResponse({ diseaseId, input: { filename: 'built-in sample', size_bytes: null, source: 'sample' } });
  }, [result, requested]);
  const handleDownload = () => window.print(); // "Save as PDF" from the browser print dialog

  return (
    <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin py-space-md md:py-space-xl flex flex-col gap-space-lg">
      <SampleBanner result={data} submission={submission} />
      <ResultHeader result={data} onDownload={handleDownload} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <SpecimenPanel result={data} />
          <ProbabilityCard probabilities={data.probabilities} />
          <ReferenceCard reference={data.report.reference} />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <DescriptionCard report={data.report} />
          <SignaturesCard signatures={data.report.signatures} />
          <TriggersCard triggers={data.report.triggers} />
          <ManagementCard management={data.report.management} />
        </div>
      </div>
      <ActionBar onDownload={handleDownload} />
      <AdvisoryNotice />
    </div>
  );
}
