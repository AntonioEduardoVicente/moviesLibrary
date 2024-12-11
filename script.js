const key = "3f3f507b";
const searchButton = document.getElementById("searchButton");
const overlay = document.getElementById("modalOverlay");
const movieName = document.getElementById("movieName");
const movieYear = document.getElementById("movieYear");

async function searchButtonClickHandler() {
  try {
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGen()}&y=${movieYearParameterGen()}
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

searchButton.addEventListener("click", searchButtonClickHandler);
 