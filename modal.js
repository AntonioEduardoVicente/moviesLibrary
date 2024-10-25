const background = document.getElementById('modalBackground')



function backgroundClickHandler() {
    overlay.classList.remove('open')
}

background.addEventListener('click', backgroundClickHandler)
