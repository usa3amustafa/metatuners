const slides = document.querySelectorAll('.slider-item')

const sliderLeftBtn = document.querySelector('.slider-left')
const sliderRightBtn = document.querySelector('.slider-right')

const dotContainer = document.querySelector('.slider-dots')

let currSlide = 0
const maxSlide = slides.length

const activateDot = function (slide) {
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active-dot')

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add('active-dot')
  })
}

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`
  })
}

goToSlide(0)

// next slide
const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0
  } else {
    currSlide++
  }

  goToSlide(currSlide)
  activateDot(currSlide)

  // clearing interval
  clearInterval(sliderInterval)

  sliderInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

// auto slide

let sliderInterval = setInterval(() => {
  nextSlide()
}, 5000)

// prev slide

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1
  } else {
    currSlide--
  }
  goToSlide(currSlide)
  activateDot(currSlide)

  // clearing interval
  clearInterval(sliderInterval)

  sliderInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

sliderRightBtn.addEventListener('click', nextSlide)
sliderLeftBtn.addEventListener('click', prevSlide)

// dots

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    const { slide } = e.target.dataset

    goToSlide(slide)
    activateDot(slide)
  }

  // clearing interval
  clearInterval(sliderInterval)

  sliderInterval = setInterval(() => {
    nextSlide()
  }, 5000)
})
