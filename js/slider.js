import charectors from './charectorsData.js'
import VanillaTilt from './vanilla-tilt.js'

const sliderContainer = document.querySelector('.slider-main')

const nextBtns = document.querySelectorAll('.slider-right')
const prevBtns = document.querySelectorAll('.slider-left')

const slides = document.querySelectorAll('.slider-images')

VanillaTilt.init(slides, {
  max: 25,
  speed: 400,
})

let currSlide = 0

const maxSlide = 4

const activateDot = function (slide) {
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active-dot')

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add('active-dot')
  })
}

// auto slide
let sliderInterval = setInterval(() => {
  startSlider('next')
  activateDot(currSlide)
}, 1000000)

const startSlider = type => {
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling

  if (!next) {
    next = sliderContainer.firstElementChild
  }
  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next.classList.add('next')

    next = last.previousElementSibling

    if (!next) {
      next = sliderContainer.lastElementChild
    }

    next.classList.remove(['next'])
    next.classList.add('last')

    if (currSlide === 0) {
      currSlide = maxSlide - 1
    } else {
      currSlide--
    }

    activateDot(currSlide)

    return
  }

  active.classList.add(['last'])
  last.classList.add(['next'])
  next.classList.add(['active'])

  if (currSlide === maxSlide - 1) {
    currSlide = 0
  } else {
    currSlide++
  }

  activateDot(currSlide)
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    startSlider('next')

    // clearing interval
    clearInterval(sliderInterval)

    sliderInterval = setInterval(() => {
      startSlider('next')
    }, 5000)
  })
})

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    startSlider('prev')

    // clearing interval
    clearInterval(sliderInterval)

    sliderInterval = setInterval(() => {
      startSlider('next')
    }, 5000)
  })
})
