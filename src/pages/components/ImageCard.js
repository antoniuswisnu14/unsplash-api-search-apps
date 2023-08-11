import React from "react";

const ImageCard = ({ image }) => {
  const openOriginalImage = () => {
    window.location.href = image.urls.full;
  };

  return (
    <>
      <img
        className="h-150 w-full object-cover rounded-lg shadow-md cursor-pointer"
        src={image.urls.thumb}
        alt={image.alt_description}
        onClick={openOriginalImage}
      />
    </>
  );
};

export default ImageCard;
