import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ onData, openModal }) => {
  return (
    <ul className={styles["ImageGallery"]}>
      <ImageGalleryItem onData={onData} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;
