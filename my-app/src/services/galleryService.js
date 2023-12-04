// galleryService.js
const baseUrl = 'http://localhost:3030/data/gallery';

const fetchGalleryData = async (shipId) => {
  try {
    const response = await fetch(`${baseUrl}/${shipId}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    throw error;
  }
};

const createGalleryData = async (shipId, shipName, ownerId) => {
  try {
    const response = await fetch(`${baseUrl}/${shipId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: shipName,
        _id: shipId,
        _ownerId: ownerId,
        imageUrl: "",
        grandSuite: "",
        suite: "",
        deluxeBalcony: "",
        frenchBalcony: "",
        classic: "",
        length: "",
        width: "",
      }),
    });

    if (!response.ok) {
      console.error('Failed to create gallery data for the ship');
    }
  } catch (error) {
    console.error('Error creating gallery data:', error);
    throw error;
  }
};

export { fetchGalleryData, createGalleryData };
