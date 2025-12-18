'use client';

import { useState, useEffect } from 'react';

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleVideoEnd = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsHidden(true);
    }, 600);
  };

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-600 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: isHidden ? 'none' : 'auto' }}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
        style={{ display: isHidden ? 'none' : 'block' }}
      >
        <source src="/videos/matritwa_intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
