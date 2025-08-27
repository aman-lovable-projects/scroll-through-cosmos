export interface PlanetData {
  name: string;
  description: string;
  diameter: string;
  distance: string;
  gravity: string;
  atmosphere: string;
  moons: string;
  glowClass: string;
}

export const SOLAR_SYSTEM_DATA: PlanetData[] = [
  {
    name: 'The Sun',
    description: 'Our star, the Sun, is the heart of our solar system. A massive ball of hot plasma held together by its own gravity, it generates energy through nuclear fusion in its core, converting hydrogen into helium and releasing the light and heat that makes life on Earth possible.',
    diameter: '1.39 million km',
    distance: '0 km (center)',
    gravity: '274 m/s²',
    atmosphere: 'Plasma (hydrogen, helium)',
    moons: '0',
    glowClass: 'planet-glow-mercury'
  },
  {
    name: 'Mercury',
    description: 'The smallest planet and closest to the Sun, Mercury is a world of extremes. With no atmosphere to retain heat, it experiences the most extreme temperature variations in the solar system, from scorching 427°C during the day to freezing -173°C at night.',
    diameter: '4,879 km',
    distance: '57.9 million km',
    gravity: '3.7 m/s²',
    atmosphere: 'Thin (oxygen, sodium, hydrogen)',
    moons: '0',
    glowClass: 'planet-glow-mercury'
  },
  {
    name: 'Venus',
    description: 'Often called Earth\'s twin due to similar size, Venus is actually a hellish world. Its thick atmosphere of carbon dioxide creates a runaway greenhouse effect, making it the hottest planet in the solar system with surface temperatures hot enough to melt lead.',
    diameter: '12,104 km',
    distance: '108.2 million km',
    gravity: '8.87 m/s²',
    atmosphere: 'Dense CO₂ with sulfuric acid clouds',
    moons: '0',
    glowClass: 'planet-glow-venus'
  },
  {
    name: 'Earth',
    description: 'Our blue marble home is the only known planet to harbor life. With liquid water covering 71% of its surface, a protective magnetic field, and a perfect distance from the Sun, Earth provides the ideal conditions for the incredible diversity of life we see today.',
    diameter: '12,756 km',
    distance: '149.6 million km',
    gravity: '9.8 m/s²',
    atmosphere: 'Nitrogen (78%), Oxygen (21%)',
    moons: '1 (Luna)',
    glowClass: 'planet-glow-earth'
  },
  {
    name: 'Mars',
    description: 'The Red Planet gets its color from iron oxide (rust) on its surface. Mars has the largest volcano in the solar system, Olympus Mons, and evidence suggests it once had flowing water and a thicker atmosphere, making it a prime target for the search for past life.',
    diameter: '6,792 km',
    distance: '227.9 million km',
    gravity: '3.71 m/s²',
    atmosphere: 'Thin CO₂ with traces of nitrogen',
    moons: '2 (Phobos, Deimos)',
    glowClass: 'planet-glow-mars'
  },
  {
    name: 'Jupiter',
    description: 'The giant of our solar system, Jupiter is a gas giant with a mass greater than all other planets combined. Its Great Red Spot is a storm larger than Earth that has been raging for centuries, and its strong magnetic field protects the inner solar system from cosmic radiation.',
    diameter: '142,984 km',
    distance: '778.5 million km',
    gravity: '24.79 m/s²',
    atmosphere: 'Hydrogen and helium',
    moons: '95+ (including Io, Europa, Ganymede, Callisto)',
    glowClass: 'planet-glow-jupiter'
  },
  {
    name: 'Saturn',
    description: 'The jewel of the solar system, Saturn is famous for its spectacular ring system made of ice and rock particles. This gas giant is less dense than water and has a magnificent collection of moons, including Titan with its thick atmosphere and methane lakes.',
    diameter: '120,536 km',
    distance: '1.43 billion km',
    gravity: '10.44 m/s²',
    atmosphere: 'Hydrogen and helium',
    moons: '146+ (including Titan, Enceladus)',
    glowClass: 'planet-glow-saturn'
  },
  {
    name: 'Uranus',
    description: 'The tilted ice giant rotates on its side, likely due to an ancient collision. Uranus has a unique magnetic field that doesn\'t align with its rotational axis, and its atmosphere contains methane, giving it a distinctive blue-green color.',
    diameter: '51,118 km',
    distance: '2.88 billion km',
    gravity: '8.69 m/s²',
    atmosphere: 'Hydrogen, helium, and methane',
    moons: '27+ (including Titania, Oberon)',
    glowClass: 'planet-glow-uranus'
  },
  {
    name: 'Neptune',
    description: 'The windiest planet in the solar system, Neptune has supersonic winds reaching up to 2,100 km/h. This deep blue ice giant is the most distant planet from the Sun and takes 165 Earth years to complete one orbit around our star.',
    diameter: '49,528 km',
    distance: '4.50 billion km',
    gravity: '11.15 m/s²',
    atmosphere: 'Hydrogen, helium, and methane',
    moons: '16+ (including Triton)',
    glowClass: 'planet-glow-neptune'
  }
];