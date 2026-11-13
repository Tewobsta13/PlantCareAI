import { useState } from 'react';
import { images } from '../assets/images';

/** Brand mark. Falls back to an inline SVG if the (temporary) remote logo fails to load. */
export default function BrandLogo({ className = 'h-8' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <svg viewBox="0 0 32 32" className={`${className} w-auto aspect-square shrink-0`} role="img" aria-label="PlantCare AI">
        <rect width="32" height="32" rx="8" fill="#173d2b" />
        <path
          d="M9 22c0-8 5-13 14-13 0 9-5 14-13 14l-1 1"
          fill="none"
          stroke="#a2f5bb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <img
      src={images.brandLogo}
      alt="PlantCare AI Botanical Logo"
      className={`${className} w-auto object-contain`}
      onError={() => setFailed(true)}
    />
  );
}
