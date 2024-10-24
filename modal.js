const overlay = document.getElementById('modalOverlay')
const background = document.getElementById('modalBackground')

overlay.classList.add('open')

function backgroundClickHandler() {
    overlay.classList.remove('open')
}

background.addEventListener('click', backgroundClickHandler)
