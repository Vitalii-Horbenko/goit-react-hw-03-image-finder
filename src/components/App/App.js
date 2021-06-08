import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Searchbar from "../Searchbar";
import Loader from "react-loader-spinner";
import Modal from "../Modal";

class App extends Component {
  state = {
    data: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    selectedImage: "",
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

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, data: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const apiKey = "18864505-6c3c7593910f8166537b8d98b";

    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12
        `
      )
      .then(({ data }) => {
        console.log(data.hits);
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
    const { data, isLoading, showModal, selectedImage } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal image={selectedImage} onClose={this.toggleModal} />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          {data.map(({ id, webformatURL, tags }) => (
            <li className="ImageGalleryItem" key={id}>
              <img
                src={webformatURL}
                alt={tags}
                className="ImageGalleryItem-image"
                onClick={this.toggleModal}
              />
            </li>
          ))}
        </ul>
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {data.length > 0 && !isLoading && (
          <button type="button" onClick={this.fetchImages} className="Button">
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
