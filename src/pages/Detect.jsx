import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccuracyNote from '../components/detect/AccuracyNote';
import DetectHeader from '../components/detect/DetectHeader';
import ModelInfoCard from '../components/detect/ModelInfoCard';
import PhotographyGuide from '../components/detect/PhotographyGuide';
import SampleSelector from '../components/detect/SampleSelector';
import StatsRow from '../components/detect/StatsRow';
import UploadCard from '../components/detect/UploadCard';
import useAnalysis from '../hooks/useAnalysis';
import useAnalysisStore from '../hooks/useAnalysisStore';
import useImageUpload from '../hooks/useImageUpload';
import { getSample } from '../data/samples';

export default function Detect() {
  const upload = useImageUpload();
  const analysis = useAnalysis();
  const { setAnalysis } = useAnalysisStore();
  const navigate = useNavigate();
  const location = useLocation();
  const pickerRequested = useRef(false);

  // "Upload Leaf" in the header lands here and opens the file picker.
  useEffect(() => {
    if (location.state?.openPicker && !pickerRequested.current) {
      pickerRequested.current = true; // StrictMode runs effects twice in dev
      upload.openPicker();
      navigate('.', { replace: true, state: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  const handleAnalyze = async () => {
    const result = await analysis.run({ file: upload.file, sampleId: upload.sampleId });
    if (!result) return;
    const sample = upload.sampleId ? getSample(upload.sampleId) : null;
    setAnalysis(result, {
      name: upload.meta.name,
      source: upload.source,
      previewUrl: upload.previewUrl,
      sampleLabel: sample?.label ?? null,
    });
    navigate('/results');
  };

  return (
    <section className="max-w-[1440px] mx-auto w-full px-margin-mobile sm:px-margin py-space-xl">
      <DetectHeader />
      <SampleSelector activeId={upload.sampleId} onSelect={upload.selectSample} disabled={analysis.isLoading} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <UploadCard upload={upload} analysis={analysis} onAnalyze={handleAnalyze} />
          <ModelInfoCard />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <PhotographyGuide />
          <AccuracyNote />
        </div>
      </div>
      <StatsRow />
    </section>
  );
}
