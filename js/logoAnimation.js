const logo = document.querySelector('.logo')

setInterval(function () {
  logo.src = '../img/gliched-logo.gif'
  setTimeout(function () {
    logo.src = '../img/SPLASH PAGE/MetaTuners_M.png'
  }, 1500)
}, 4000)

const contactUsLogo = document.querySelector('.contact-us-logo-img')

setInterval(function () {
  contactUsLogo.src = '../img/gliched-logo.gif'
  setTimeout(function () {
    contactUsLogo.src = '../img/SPLASH PAGE/MetaTuners_M.png'
  }, 1500)
}, 4000)
