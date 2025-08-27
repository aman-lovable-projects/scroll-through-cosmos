const NASA_API_KEY = 'jnXfJVz9rba1Tx3sBlS12KznSrUZlZp21YiTNPRU';
const NASA_IMAGE_API = 'https://images-api.nasa.gov/search';

export interface NASAImageResult {
  collection: {
    items: Array<{
      href: string;
      data: Array<{
        title: string;
        description: string;
        date_created: string;
      }>;
      links?: Array<{
        href: string;
        rel: string;
        render?: string;
      }>;
    }>;
  };
}

export const fetchPlanetImage = async (planetName: string): Promise<string | null> => {
  try {
    // Search queries optimized for best planetary images
    const searchQueries = {
      'Sun': 'sun solar flare',
      'Mercury': 'mercury planet surface',
      'Venus': 'venus planet atmosphere',
      'Earth': 'earth blue marble',
      'Mars': 'mars planet surface',
      'Jupiter': 'jupiter great red spot',
      'Saturn': 'saturn rings',
      'Uranus': 'uranus planet',
      'Neptune': 'neptune planet blue'
    };

    const query = searchQueries[planetName as keyof typeof searchQueries] || planetName.toLowerCase();
    const response = await fetch(
      `${NASA_IMAGE_API}?q=${encodeURIComponent(query)}&media_type=image&page_size=10`
    );

    if (!response.ok) {
      throw new Error(`NASA API request failed: ${response.status}`);
    }

    const data: NASAImageResult = await response.json();
    
    // Find the best quality image
    for (const item of data.collection.items) {
      if (item.links && item.links.length > 0) {
        // Prefer images with "orig" or high resolution
        const bestLink = item.links.find(link => 
          link.href.includes('orig') || 
          link.href.includes('large') ||
          link.href.includes('medium')
        ) || item.links[0];
        
        return bestLink.href;
      }
    }

    return null;
  } catch (error) {
    console.warn(`Failed to fetch image for ${planetName}:`, error);
    return null;
  }
};

export const preloadPlanetImages = async (planetNames: string[]): Promise<Map<string, string>> => {
  const imageMap = new Map<string, string>();
  
  const promises = planetNames.map(async (planet) => {
    const imageUrl = await fetchPlanetImage(planet);
    if (imageUrl) {
      imageMap.set(planet, imageUrl);
    }
  });

  await Promise.allSettled(promises);
  return imageMap;
};