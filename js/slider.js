import charectors from './charectorsData.js'

const sliderContainer = document.querySelector('.slider-main')

const nextBtns = document.querySelectorAll('.slider-right')
const prevBtns = document.querySelectorAll('.slider-left')

const slides = document.querySelectorAll('slider-item')

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
}, 5000)

// creating slides
sliderContainer.innerHTML = charectors
  .map((charector, index) => {
    const { title, subTitle, info, img } = charector

    let position = 'next'

    if (index === 0) {
      position = 'active'
    }
    if (index === charectors.length - 1) {
      position = 'last'
    }

    return `
                <div class="slider-item ${position}">
                  <!-- slider text (slide) -->
                  <div class="slider-text">
                    <h2 class="slider-item-title">${title}</h2>
                    <h3 class="slider-item-subtitle">${subTitle}</h3>
                    <p class="slider-item-desc">
                      ${info}
                    </p>
                    <h2 class="slider-item-info">Info</h2>
                    <ul class="slider-item-links">
                      <li class="slider-item-link">
                        Meta Tuners
                        <a href="#"
                          >Opensea <i class="fa-solid fa-arrow-right"></i
                        ></a>
                      </li>
                      <li class="slider-item-link">
                        Meta Tuners
                        <a href="#"
                          >LooksRare <i class="fa-solid fa-arrow-right"></i
                        ></a>
                      </li>
                      <li class="slider-item-link">
                        Meta Tuners
                        <a href="#">Rarity <i class="fa-solid fa-arrow-right"></i></a>
                      </li>
                      <li class="slider-item-link">
                        Meta Tuners
                        <a href="#"
                          >Analytics <i class="fa-solid fa-arrow-right"></i
                        ></a>
                      </li>
                    </ul>
                  </div>

                  <!-- slider img (slide) -->
                  <div class="slider-images" data-tilt data-tilt-max="10">
                    <img src="${img}" alt="jdm" class="charector-img" />
                  </div>
                </div>
  `
  })
  .join('')

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
