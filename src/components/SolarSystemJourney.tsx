import { useEffect, useState } from 'react';
import { Starfield } from './Starfield';
import { PlanetSection } from './PlanetSection';
import { SOLAR_SYSTEM_DATA } from '@/data/planets';
import { preloadPlanetImages } from '@/utils/nasa-api';

export const SolarSystemJourney = () => {
  const [planetImages, setPlanetImages] = useState<Map<string, string>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      const planetNames = SOLAR_SYSTEM_DATA.map(planet => planet.name);
      const images = await preloadPlanetImages(planetNames);
      setPlanetImages(images);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-deep-space flex items-center justify-center">
        <Starfield />
        <div className="text-center z-10 relative">
          <div className="animate-pulse text-6xl mb-4">🚀</div>
          <h2 className="text-space-title text-foreground mb-4">
            Preparing Journey
          </h2>
          <p className="text-space-body text-foreground/70">
            Loading images from NASA's archives...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Starfield />
      
      {/* Journey Introduction */}
      <section className="min-h-screen flex items-center justify-center space-gradient-sun relative">
        <div className="text-center z-10 max-w-4xl mx-auto px-8">
          <h1 className="text-space-title mb-8 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Journey Through Our Solar System
          </h1>
          <p className="text-space-subtitle text-foreground/80 mb-12 leading-relaxed">
            Embark on an immersive voyage from the blazing Sun to the distant ice giants. 
            Scroll down to explore each celestial body in our cosmic neighborhood.
          </p>
          <div className="animate-bounce text-4xl text-foreground/60">
            ↓
          </div>
        </div>
      </section>

      {/* Planet Sections */}
      {SOLAR_SYSTEM_DATA.map((planet, index) => (
        <PlanetSection
          key={planet.name}
          planet={planet}
          imageUrl={planetImages.get(planet.name)}
          index={index}
        />
      ))}

      {/* Journey End */}
      <section className="min-h-screen flex items-center justify-center space-gradient-deep relative">
        <div className="text-center z-10 max-w-4xl mx-auto px-8">
          <h2 className="text-space-title mb-8 bg-gradient-to-b from-cosmic-purple via-stellar-blue to-foreground bg-clip-text text-transparent">
            Beyond Neptune
          </h2>
          <p className="text-space-body text-foreground/70 mb-8 leading-relaxed">
            Our journey through the planets ends here, but the solar system continues far beyond Neptune. 
            In the outer reaches lie the dwarf planets, the Kuiper Belt, and the mysterious Oort Cloud, 
            where comets are born and the Sun's influence finally gives way to interstellar space.
          </p>
          <div className="text-2xl text-cosmic-purple animate-pulse">
            ✨ The cosmos awaits ✨
          </div>
        </div>
      </section>
    </div>
  );
};