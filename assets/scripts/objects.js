const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];
addMovieBtn.addEventListener("click", () => {
  // Get values from input fields
  const movieTitle = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  // console.log(movieTitle, extraName, extraValue);

  // Create an object
  const movieObject = {
    title: movieTitle,
    extra: {
      name: extraName,
      value: extraValue,
    },
  };

  movies.push(movieObject);
  console.dir(movieObject);
  console.dir(movies);

  movies.forEach((movie) => {
    console.log("Movie title", movie.title);
  });

  showMovieList();
});

const showMovieList = () => {
  const movieList = document.getElementById("movie-list");
  const listItem = document.createElement("li");
  listItem.textContent = "hi";
  movieList.append(listItem);
  console.log(listItem);
  movieList.classList.add("visible");
};
