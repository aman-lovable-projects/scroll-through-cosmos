import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PlanetData {
  name: string;
  description: string;
  diameter: string;
  distance: string;
  gravity: string;
  atmosphere: string;
  moons: string;
  glowClass: string;
}

interface PlanetSectionProps {
  planet: PlanetData;
  imageUrl?: string;
  index: number;
}

export const PlanetSection = ({ planet, imageUrl, index }: PlanetSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getBackgroundClass = () => {
    if (index === 0) return 'space-gradient-sun'; // Sun
    if (index <= 2) return 'space-gradient-inner'; // Mercury, Venus
    if (index <= 4) return 'space-gradient-inner'; // Earth, Mars
    if (index <= 6) return 'space-gradient-outer'; // Jupiter, Saturn
    return 'space-gradient-deep'; // Uranus, Neptune
  };

  return (
    <section
      ref={sectionRef}
      className={`planet-section ${getBackgroundClass()} transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-70'
      }`}
    >
      <div className="planet-content">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <h1 className="text-space-title mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {planet.name}
          </h1>
          <p className="text-space-body text-foreground/80 mb-8 leading-relaxed">
            {planet.description}
          </p>
          
          <Card className={`bg-card/20 backdrop-blur-sm border-border/30 ${planet.glowClass}`}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-space-body">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Diameter:</span>
                    <span className="text-foreground font-semibold">{planet.diameter}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Distance from Sun:</span>
                    <span className="text-foreground font-semibold">{planet.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gravity:</span>
                    <span className="text-foreground font-semibold">{planet.gravity}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Atmosphere:</span>
                    <span className="text-foreground font-semibold">{planet.atmosphere}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Moons:</span>
                    <span className="text-foreground font-semibold">{planet.moons}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {imageUrl ? (
            <div className={`relative overflow-hidden rounded-2xl ${planet.glowClass}`}>
              <img
                src={imageUrl}
                alt={`${planet.name} from NASA`}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className={`w-full h-96 bg-gradient-to-br from-muted to-card rounded-2xl flex items-center justify-center ${planet.glowClass}`}>
              <div className="text-center text-muted-foreground">
                <div className="animate-pulse text-2xl mb-2">🪐</div>
                <p>Loading {planet.name} image...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};