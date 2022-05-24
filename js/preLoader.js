// preloader

const preLoader = document.querySelector('#preloader')

const preLoaderImg = document.querySelector('.preloader-img')

setInterval(function () {
  preLoaderImg.src = '../img/gliched-logo.gif'
  setTimeout(function () {
    preLoaderImg.src = '../img/SPLASH PAGE/MetaTuners_M.webp'
  }, 1000)
}, 4000)

window.addEventListener('load', () => {
  preLoader.style.display = 'none'
})
