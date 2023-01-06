// elements
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLinks = document.querySelectorAll('nav-links')

// functions
function activate() {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}

function remove() {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}

// event listeners
hamburger.addEventListener('click', activate)
navLinks.forEach(link => {
    link.addEventListener('click', remove)
})