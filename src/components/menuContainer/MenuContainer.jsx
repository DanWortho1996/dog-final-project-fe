import React, { useState, useEffect } from 'react';
import '../../pages/menuPage/MenuPage.css'; 

const DogBreedsMenu = () => {
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false); // State to handle animation
  
    useEffect(() => {
      fetchDogImage();
    }, []);
  
    const fetchDogImage = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('API Response:', data); // Log the API response
        if (data && data.length > 0) {
          const dogData = data[0];
          setDogImage(dogData.url);
          setAnimate(false); // Reset animation
        } else {
          console.error('No dog image data available.');
        }
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleRandomize = () => {
      setAnimate(true); // Trigger animation
      setTimeout(fetchDogImage, 500); // Delay fetching a new image to allow animation to complete
    };
  
    return (
      <div className="dog-container">
        <h1>Dog of the Day</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          dogImage ? (
            <div className={`dog-image-container ${animate ? 'bounce-out' : ''}`}>
              <img src={dogImage} alt="Dog" className="dog-image" />
              <button className="randomize-button" onClick={handleRandomize}>Randomize</button>
            </div>
          ) : (
            <p>No data available</p>
          )
        )}
      </div>
    );
  };
  
  export default DogBreedsMenu;