import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const Home = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const getImage = async () => {
      try {
        const res1 = await fetch('/api/image');
        const data1 = await res1.json();
        console.log(data1)

        const res = await fetch('https://fastapi-backend-test.herokuapp.com/image');
        const data = await res.json();
        console.log(data)

        setImageURL(data.url);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getImage();
  }, []);

  return (
    <div>
      <h1>Image Display</h1>
      {imageURL && <img src={imageURL} alt="Sample" />}
    </div>
  );
};

export default Home;
