const openMenu = document.querySelector('.hamburger'),
  closeMenu = document.querySelector('.close-menu'),
  navbar = document.querySelector('.nav-homepage-links'),
  links = document.querySelectorAll('.nav-homepage-link')
links.forEach(e => {
  e.addEventListener('click', function () {
    navbar.classList.remove('show-nav')
  })
}),
  openMenu.addEventListener('click', () => {
    navbar.classList.add('show-nav')
  }),
  closeMenu.addEventListener('click', () => {
    navbar.classList.remove('show-nav')
  })
const readMoreBtn = document.querySelector('.read-more'),
  readMoreText = document.querySelector('.read-more-text')
readMoreBtn.addEventListener('click', function () {
  readMoreText.classList.add('show-read-more'),
    readMoreBtn.classList.add('hidden')
})
