import React, { useState } from 'react';

function Gallery() {
  const [gallery] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
  ]);
  return (
    <div className='m-b-10 py-20'>
      <p className='gallery'>사 진 첩</p>
      {gallery.map((n) => (
        <div className='w-3 inline mx-5 space-center'>
          <img
            width={100}
            src={require(`../assets/jpg/${n}.jpeg`)}
            key={n}
            alt={n}
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
