// preloader

const preLoader = document.querySelector('#preloader')

window.addEventListener('load', () => {
  preLoader.style.display = 'none'
})

const preloaderImg = document.querySelector('.preloader-img')

setInterval(function () {
  preloaderImg.src = '../img/gliched-logo.gif'
  setTimeout(function () {
    preloaderImg.src = '../img/SPLASH PAGE/MetaTuners_M.png'
  }, 1000)
}, 3000)
