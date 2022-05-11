const openMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-menu')
const navbar = document.querySelector('.nav-homepage-links')

openMenu.addEventListener('click', () => {
  navbar.classList.add('show-nav')
})
closeMenu.addEventListener('click', () => {
  navbar.classList.remove('show-nav')
})
