import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  delay: number;
}

export const Starfield = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 200;

      for (let i = 0; i < starCount; i++) {
        const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
        const weights = [0.7, 0.25, 0.05]; // 70% small, 25% medium, 5% large
        
        let randomValue = Math.random();
        let selectedSize: 'small' | 'medium' | 'large' = 'small';
        
        if (randomValue < weights[0]) {
          selectedSize = 'small';
        } else if (randomValue < weights[0] + weights[1]) {
          selectedSize = 'medium';
        } else {
          selectedSize = 'large';
        }

        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: selectedSize,
          delay: Math.random() * 3,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star-${star.size}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};