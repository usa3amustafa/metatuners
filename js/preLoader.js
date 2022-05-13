// preloader

const preLoader = document.querySelector('#preloader')

const preLoaderImg = document.querySelector('.preloader-img')

setInterval(function () {
  preLoaderImg.src = '../img/gliched-logo.gif'
  setTimeout(function () {
    preLoaderImg.src = '../img/SPLASH PAGE/MetaTuners_M.png'
  }, 500)
}, 1500)

window.addEventListener('load', () => {
  preLoader.style.display = 'none'
})
