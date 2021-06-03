import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Searchbar from "../Searchbar";

class App extends Component {
  state = {
    data: [],
    currentPage: 1,
  };

  onChangeQuery = (query) => {
    const { currentPage } = this.state;
    const apiKey = "18864505-6c3c7593910f8166537b8d98b";
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12
        `
      )
      .then(({ data }) => {
        console.log(data.hits);
        this.setState({ data: data.hits });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          {data.map(({ id, webformatURL, tags }) => (
            <li className="ImageGalleryItem" key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
