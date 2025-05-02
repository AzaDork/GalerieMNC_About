import React from 'react';
import Inté1 from '/GalerieMNC_inté1.jpeg';
import Inté2 from '/GalerieMNC_inté2.jpeg';
import Inté3 from '/GalerieMNC_inté3.jpeg';

const galleryImages = [
  {
    src: "/gallery/image1.jpg",
    alt: "Vue de la galerie avec des estampes et une sculpture",
    className: "col-span-2 row-span-2"
  },
  {
    src: "/gallery/image2.jpg",
    alt: "Espace d'exposition avec des estampes et des supports"
  },
  {
    src: "/gallery/image3.jpg",
    alt: "Vue intérieure de la galerie avec des œuvres encadrées"
  }
];

const Mosaic: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[300px]">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden ${image.className || ''}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mosaic;