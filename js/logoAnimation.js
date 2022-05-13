const logo = document.querySelector('.logo')

setInterval(function () {
  logo.src = '../img/gliched-logo.gif'
  setTimeout(function () {
    logo.src = '../img/SPLASH PAGE/MetaTuners_M.png'
  }, 1500)
}, 4000)
