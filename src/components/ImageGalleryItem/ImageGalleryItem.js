import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ largeImageURL, webformatURL, tags, openModal }) => {
  return (
    <>
      <li className={styles["ImageGalleryItem"]}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles["ImageGalleryItem-image"]}
          onClick={openModal}
          data-large={largeImageURL}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
