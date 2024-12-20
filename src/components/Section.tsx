import React from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
  backgroundUrl: string;
  buttonText: string;
  videoUrl?: string;
}

export default function Section({ 
  title, 
  subtitle, 
  backgroundUrl, 
  buttonText,
  videoUrl 
}: SectionProps) {
  return (
    <div className="relative h-screen w-full">
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        />
      )}
      
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative h-full flex flex-col justify-end pb-32 px-8 md:px-20">
        <div className="max-w-xl">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-white text-lg mb-8">{subtitle}</p>
          <button className="border-2 border-white text-white px-12 py-3 text-sm hover:bg-white hover:text-black transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}