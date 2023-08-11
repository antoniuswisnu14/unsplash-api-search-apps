import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-8 gap-4 my-10 max-w-7xl mx-auto px-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default ImageList;
