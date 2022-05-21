const sliderContainer = document.querySelector('.slider-main')

const nextBtns = document.querySelectorAll('.slider-right')
const prevBtns = document.querySelectorAll('.slider-left')

let currSlide = 0

const maxSlide = 4

// // auto slide
let sliderInterval = setInterval(() => {
  startSlider('next')
  activateDot(currSlide)
}, 5000)

// acativate dot
const activateDot = function (slide) {
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active-dot')

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add('active-dot')
  })
}

const dots = document.querySelectorAll('.dots')
const slides = document.querySelectorAll('.slider-item')

document.querySelector('.dot-1').addEventListener('click', function () {
  goToSlide(0)
})
document.querySelector('.dot-2').addEventListener('click', function () {
  goToSlide(1)
})
document.querySelector('.dot-3').addEventListener('click', function () {
  goToSlide(2)
})
document.querySelector('.dot-4').addEventListener('click', function () {
  goToSlide(3)
})

const goToSlide = slide => {
  // select all elements with required classes
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  const next = document.querySelectorAll('.next')

  // remove classes
  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.forEach(n => n.classList.remove('next'))

  // add classes

  let activeSlide, nextSlide1, nextSlide2, prevSlide

  if (slide === 0) {
    activeSlide = 0
    nextSlide1 = 1
    nextSlide2 = 2
    prevSlide = 3
  }

  if (slide === 1) {
    activeSlide = 1
    nextSlide1 = 2
    nextSlide2 = 3
    prevSlide = 0
  }
  if (slide === 2) {
    activeSlide = 2
    nextSlide1 = 3
    nextSlide2 = 0
    prevSlide = 1
  }
  if (slide === 3) {
    activeSlide = 3
    nextSlide1 = 0
    nextSlide2 = 1
    prevSlide = 2
  }

  slides[activeSlide].classList.add('active')
  slides[nextSlide1].classList.add('next')
  slides[nextSlide2].classList.add('next')
  slides[prevSlide].classList.add('last')

  activateDot(activeSlide)

  clearInterval(sliderInterval)
  sliderInterval = setInterval(() => {
    startSlider('next')
    activateDot(currSlide)
  }, 5000)
}

const startSlider = type => {
  // select all elements with required classes
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling

  // select next properly
  if (!next) {
    next = sliderContainer.firstElementChild
  }

  // remove classes
  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  // if prev
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

  // if next
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
