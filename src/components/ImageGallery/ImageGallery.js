import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ onData, openModal }) => {
  return (
    <ul className={styles["ImageGallery"]}>
      {onData.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          openModal={openModal}
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
