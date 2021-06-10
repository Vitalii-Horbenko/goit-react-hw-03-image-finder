import axios from "axios";

const fetchImg = (currentPage, searchQuery) => {
  const apiKey = "18864505-6c3c7593910f8166537b8d98b";
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12
        `
    )
    .then(({ data }) => data);
};

export default { fetchImg };
