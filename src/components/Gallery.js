import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className='m-b-10 py-20'>
      <p className='gallery'>사 진 첩</p>
      {gallery.map((src, index) => (
        <div key={index} className='w-3 inline mx-5 space-center'>
          <img
            width={100}
            src={require(`../assets/jpg/photos/${index}.jpeg`)}
            onClick={() => openImageViewer(index)}
            key={src}
            alt={src}
          />
          {isViewerOpen && (
            <ImageViewer
              src={gallery}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
