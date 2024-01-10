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

  showMovieList();
});

const showMovieList = () => {
  const movieList = document.getElementById("movie-list");
  const listItem = document.createElement("li");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  movies.forEach((movie) => {
    listItem.textContent = `${movie.title} - ${movie.extra.name} (${movie.extra.value})`;
    movieList.append(listItem);
  });
};

const filterData = () => {
  const filterTitle = document.getElementById("filter-title").value;
  movies.filter((val) => {
    console.log(val.title);
  });
};

searchBtn.addEventListener("click", filterData);
