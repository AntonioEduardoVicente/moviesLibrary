const searchButton = document.getElementById('searchButton');

const overlay = document.getElementById('modalOverlay');

const movieName = document.getElementById('movieName');
const movieYear = document.getElementById('movieYear');

async function searchButtonClickHandler (){
    let url = (`http://www.omdbapi.com/?apikey=[a62935bf]&t=${movieName.value
        .split(' ')
        .join('+')}&${movieYear.value}
        `);
    overlay.classList.add('open');
    const response = await fetch(url);
    const data = await response.json();
    console.log('data:', data)
    
    // console.log(movieName.value.split(' ').join('+'));
    // console.log('year:  ', movieYear.value);

}

searchButton.addEventListener('click', searchButtonClickHandler);

