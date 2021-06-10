import React, { Component } from "react";
import styles from "./App.module.css";
import Searchbar from "../Searchbar";
import Loader from "../Loader";
import Modal from "../Modal";
import pixabayApi from "../../services/pixabay-api";
import Button from "../Button";
import ImageGalleryItem from "../ImageGalleryItem";
import ImageGallery from "../ImageGallery";

class App extends Component {
  state = {
    data: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    largeImageURL: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = (e) => {
    this.toggleModal();
    const { large } = e.target.dataset;
    this.setState({ largeImageURL: large });
  };

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, data: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    this.setState({ isLoading: true });
    pixabayApi
      .fetchImg(currentPage, searchQuery)
      .then((data) => {
        this.setState((prevState) => ({
          data: [...prevState.data, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  render() {
    const { data, isLoading, showModal, largeImageURL } = this.state;
    return (
      <div className={styles.App}>
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery>
          <ImageGalleryItem onData={data} openModal={this.openModal} />
        </ImageGallery>
        {isLoading && <Loader />}
        {data.length > 0 && !isLoading && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
