// preloader

const preLoader = document.querySelector('#preloader')

const preloaderImg = document.querySelector('.preloader-img')

setInterval(function () {
  preloaderImg.src = '../img/gliched-logo.gif'
  setTimeout(function () {
    preloaderImg.src = '../img/SPLASH PAGE/MetaTuners_M.png'
  }, 500)
}, 1000)

window.addEventListener('load', () => {
  preLoader.style.display = 'none'
})
