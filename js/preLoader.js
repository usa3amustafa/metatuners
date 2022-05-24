const preLoader = document.querySelector('#preloader'),
  preLoaderImg = document.querySelector('.preloader-img')
setInterval(function () {
  ;(preLoaderImg.src = '../img/gliched-logo.gif'),
    setTimeout(function () {
      preLoaderImg.src = '../img/SPLASH PAGE/MetaTuners_M.webp'
    }, 1e3)
}, 4e3),
  window.addEventListener('load', () => {
    preLoader.style.display = 'none'
  })
