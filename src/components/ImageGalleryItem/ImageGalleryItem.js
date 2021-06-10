import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ onData, openModal }) => {
  return (
    <>
      {onData.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li className={styles["ImageGalleryItem"]} key={id}>
          <img
            src={webformatURL}
            alt={tags}
            className={styles["ImageGalleryItem-image"]}
            onClick={openModal}
            data-large={largeImageURL}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  onData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
