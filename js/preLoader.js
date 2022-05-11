// preloader

const preLoader = document.querySelector('#preloader')

console.log(preLoader)

window.addEventListener('load', () => {
  preLoader.style.display = 'none'
})
