import React from "react";

const ImageGalleryItem = ({ onData, openModal }) => {
  return (
    <>
      {onData.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
            onClick={openModal}
            data-large={largeImageURL}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
