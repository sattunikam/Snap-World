"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [photos, setPhotos] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setPhotos(response.data);
    } catch (error) {
      console.error("fetching error");
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <button onClick={getImages} className='p-5 m-5 bg-red-500 rounded'>
          Get Images
        </button>
      </div>

      <div className='flex flex-wrap w-full'>
        {photos.map((photo, index) => (
          <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
            <img
              src={photo.download_url}
              alt={`Image ${index + 1}`}
              className='w-full h-52 object-cover rounded'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
