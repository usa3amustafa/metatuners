const sliderContainer = document.querySelector('.slider-main'),
  nextBtns = document.querySelectorAll('.slider-right'),
  prevBtns = document.querySelectorAll('.slider-left')
let currSlide = 0
const maxSlide = 4,
  activateDot = function (e) {
    document.querySelectorAll('.dot').forEach(t => {
      t.classList.remove('active-dot'),
        document
          .querySelector(`.dot[data-slide="${e}"]`)
          .classList.add('active-dot')
    })
  }
let sliderInterval = setInterval(() => {
  startSlider('next'), activateDot(currSlide)
}, 5e3)
const dots = document.querySelectorAll('.dots'),
  slides = document.querySelectorAll('.slider-item')
document.querySelector('.dot-1').addEventListener('click', function () {
  goToSlide(0)
}),
  document.querySelector('.dot-2').addEventListener('click', function () {
    goToSlide(1)
  }),
  document.querySelector('.dot-3').addEventListener('click', function () {
    goToSlide(2)
  }),
  document.querySelector('.dot-4').addEventListener('click', function () {
    goToSlide(3)
  })
const goToSlide = e => {
    const t = document.querySelector('.active'),
      l = document.querySelector('.last'),
      r = document.querySelectorAll('.next')
    let s, i, d, c
    t.classList.remove(['active']),
      l.classList.remove(['last']),
      r.forEach(e => e.classList.remove('next')),
      0 === e && ((s = 0), (i = 1), (d = 2), (c = 3), (currSlide = 0)),
      1 === e && ((s = 1), (i = 2), (d = 3), (c = 0), (currSlide = 1)),
      2 === e && ((s = 2), (i = 3), (d = 0), (c = 1), (currSlide = 2)),
      3 === e && ((s = 3), (i = 0), (d = 1), (c = 2), (currSlide = 3)),
      slides[s].classList.add('active'),
      slides[i].classList.add('next'),
      slides[d].classList.add('next'),
      slides[c].classList.add('last'),
      activateDot(s),
      clearInterval(sliderInterval),
      (sliderInterval = setInterval(() => {
        startSlider('next'), activateDot(currSlide)
      }, 5e3))
  },
  startSlider = e => {
    const t = document.querySelector('.active'),
      l = document.querySelector('.last')
    let r = t.nextElementSibling
    if (
      (r || (r = sliderContainer.firstElementChild),
      t.classList.remove(['active']),
      l.classList.remove(['last']),
      r.classList.remove(['next']),
      'prev' === e)
    )
      return (
        t.classList.add('next'),
        l.classList.add('active'),
        r.classList.add('next'),
        (r = l.previousElementSibling),
        r || (r = sliderContainer.lastElementChild),
        r.classList.remove(['next']),
        r.classList.add('last'),
        0 === currSlide ? (currSlide = 3) : currSlide--,
        void activateDot(currSlide)
      )
    t.classList.add(['last']),
      l.classList.add(['next']),
      r.classList.add(['active']),
      3 === currSlide ? (currSlide = 0) : currSlide++,
      activateDot(currSlide)
  }
nextBtns.forEach(e => {
  e.addEventListener('click', () => {
    startSlider('next'),
      clearInterval(sliderInterval),
      (sliderInterval = setInterval(() => {
        startSlider('next')
      }, 5e3))
  })
}),
  prevBtns.forEach(e => {
    e.addEventListener('click', () => {
      startSlider('prev'),
        clearInterval(sliderInterval),
        (sliderInterval = setInterval(() => {
          startSlider('next')
        }, 5e3))
    })
  })
