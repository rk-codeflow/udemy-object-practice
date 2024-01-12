const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

addMovieBtn.addEventListener("click", () => {
  // Get values from input fields
  const movieTitle = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // Create an object
  const movieObject = {
    title: movieTitle,
    extra: {
      name: extraName,
      value: extraValue,
    },
  };

  movies.push(movieObject);

  showMovieList();
});

// Render movie list
const showMovieList = () => {
  const movieList = document.getElementById("movie-list");
  const filterTitle = document.getElementById("filter-title").value;

  movieList.innerHTML = ""; // Clear previous list items

  // show the movielist wrapper if there are movies, otherwise hide it.
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  movies
    .filter((movie) => movie.title.includes(filterTitle))
    .forEach((movie) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${movie.title} - ${movie.extra.name} (${movie.extra.value})`;
      movieList.append(listItem);
    });
};

searchBtn.addEventListener("click", () => {
  showMovieList();
});
