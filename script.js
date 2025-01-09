const key = "3f3f507b";
const searchButton = document.getElementById("searchButton");
const overlay = document.getElementById("modalOverlay");
const movieName = document.getElementById("movieName");
const movieYear = document.getElementById("movieYear");
const movieListContainer = document.getElementById("movieList");

let movieList = [];

async function searchButtonClickHandler() {
  try {
    let url = `https://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGen()}&y=${movieYearParameterGen()}
        `;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data:", data);
    if (data.Error) {
        throw new Error('Movie not Found')
    }
    createModal(data);
    overlay.classList.add("open");
    } catch (error) {
    notie.alert({type: 'error',
        text: error.message});
  }
  
}

function movieNameParameterGen() {
  if (movieName.value === "") {
    throw new Error("The movie name must be informed");
  }
  return movieName.value.split(" ").join("+");
}

function movieYearParameterGen() {
    if (movieYear.value === '') {
        return '';
    } 
    if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
        throw new Error('The movie year must have 4 numbers, and none letters')
    }

    return `&=${movieYear.value}`
    
}

function addToList(movieObject) {
  movieList.push(movieObject);
}

function isMovieAlreadyInList(id) {
  function doesItBelongToThisMovie(movieObject) {
    return movieObject.imdbID === id;
  }
  return Boolean(movieList.find(doesItBelongToThisMovie));
}

function updateUI(movieObject){
  movieListContainer.innerHTML += `<article id="movie-card-${movieObject.imdbID}">
  <img
    src="${movieObject.Poster}" 
    alt="${movieObject.Title} poster."
  >
  <button class="removeButton" onclick="{removeFilmFromList('${movieObject.imdbID}')}">
    <i class="bi bi-trash-fill"></i>
  </button>
  </article>`;
}

function removeFilmFromList(id) {
  movieList =  movieList.filter((movie) => movie.imdbID !== id);
  document.getElementById(`movie-card-${id}`).remove();
}

searchButton.addEventListener("click", searchButtonClickHandler); 


