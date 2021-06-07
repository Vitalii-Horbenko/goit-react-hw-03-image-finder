import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Searchbar from "../Searchbar";

class App extends Component {
  state = {
    data: [],
    currentPage: 1,
    searchQuery: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, data: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const apiKey = "18864505-6c3c7593910f8166537b8d98b";
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
      .catch((error) => console.log(error));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          {data.map(({ id, webformatURL, tags }) => (
            <li className="ImageGalleryItem" key={id}>
              <img
                src={webformatURL}
                alt={tags}
                className="ImageGalleryItem-image"
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.fetchImages} className="Button">
          Load more
        </button>
      </div>
    );
  }
}

export default App;
