const openMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-menu')
const navbar = document.querySelector('.nav-homepage-links')

openMenu.addEventListener('click', () => {
  navbar.classList.add('show-nav')
})
closeMenu.addEventListener('click', () => {
  navbar.classList.remove('show-nav')
})

const readMoreBtn = document.querySelector('.read-more')
const readMoreText = document.querySelector('.read-more-text')

readMoreBtn.addEventListener('click', function () {
  readMoreText.classList.add('show-read-more')
  readMoreBtn.classList.add('hidden')
})
