import { useState } from 'react';
import SampleBadge from '../SampleBadge';

export default function ReferenceCard({ reference }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="bg-surface-container-low rounded-xl p-space-md flex items-center gap-space-md">
      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container">
        {reference.image_url && imgOk && (
          <img src={reference.image_url} onError={() => setImgOk(false)} className="w-full h-full object-cover" alt="" />
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-space-xs flex-wrap">
          Reference Image <SampleBadge />
        </span>
        <span className="font-label-lg text-label-lg text-primary-container font-semibold">{reference.title}</span>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{reference.description}</p>
      </div>
    </div>
  );
}
