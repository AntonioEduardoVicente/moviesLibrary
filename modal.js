const background = document.getElementById('modalBackground');
let modalContainer = document.getElementById('modalContainer');

let currentMovie = {};

function backgroundClickHandler() {
    overlay.classList.remove('open');
};

function closeModal() {
    overlay.classList.remove("open");
}

function addCurrentMovieTolist(){
    if (isMovieAlreadyInList(currentMovie.imdbID)) {
        notie.alert({type: "error", text: "Movie already in list!"});
        return;
    }
    addToList(currentMovie);
    updateUI(currentMovie);
    closeModal();
}

function createModal(data) {
    currentMovie = data;
    modalContainer.innerHTML = `
    <h3 id="movieTitle">${data.Title} - ${data.Year}</h3>
                <section id="modalBody">
                    <img src="${data.Poster}"
                        alt="poster de filme" id="moviePoster">
                    <div id="movieInfo">
                        <h4>
                            Plot
                        <h4>
                        <h5 id="moviePlot">${data.Plot}</h5>
                        <div id="movieCast">    
                            <h4>
                                Actors:
                            </h4>
                            <h5>${data.Actors}</h5>
                        </div>
                        <div id="movieGenre">    
                            <h4>
                             Genre:
                            </h4>
                            <h5>${data.Genre}</h5>
                        </div>    
                    </div>
                </section>
                <section id="modalFoteer">
                    <button id="addToList"  onclick="{addCurrentMovieTolist()}" >Add</button>
                </section> `;
};


background.addEventListener('click', backgroundClickHandler);

