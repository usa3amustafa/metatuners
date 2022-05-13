// Slider section title text slide up

const sliderItemTitle = document.querySelector('.slider-item-title')

const revealSliderTitle = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const sliderTitleObserver = new IntersectionObserver(revealSliderTitle, {
  root: null,
  threshold: 0.5,
})

sliderTitleObserver.observe(sliderItemTitle)
sliderItemTitle.classList.add('title-hidden')

// Slider section subtitle text slide up

const sliderItemSubTitle = document.querySelector('.slider-item-subtitle')

const revealSliderSubTitle = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const sliderSubTitleObserver = new IntersectionObserver(revealSliderSubTitle, {
  root: null,
  threshold: 0.5,
})

sliderSubTitleObserver.observe(sliderItemSubTitle)
sliderItemSubTitle.classList.add('title-hidden')

// Slider section desc text slide up

const sliderItemDesc = document.querySelector('.slider-item-desc')

const revealSliderDesc = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const sliderDescObserver = new IntersectionObserver(revealSliderDesc, {
  root: null,
  threshold: 0.5,
})

sliderDescObserver.observe(sliderItemDesc)
sliderItemDesc.classList.add('title-hidden')

// Slider info slide up

const sliderInfo = document.querySelector('.slider-item-info')

const revealSliderInfo = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const sliderInfoObserver = new IntersectionObserver(revealSliderInfo, {
  root: null,
  threshold: 0.5,
})

sliderInfoObserver.observe(sliderInfo)
sliderInfo.classList.add('title-hidden')

// Slider links slide up

const sliderLinks = document.querySelectorAll('.slider-item-link')

const revealSliderLinks = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const sliderLinksObserver = new IntersectionObserver(revealSliderInfo, {
  root: null,
  threshold: 0.15,
})

sliderLinks.forEach(link => {
  sliderLinksObserver.observe(link)
  link.classList.add('title-hidden')
})

// Slider links slide up

const charectorImg = document.querySelector('.charector-img')

const revealCharectorImg = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const charectorImgObserver = new IntersectionObserver(revealCharectorImg, {
  root: null,
  threshold: 0.5,
})

charectorImgObserver.observe(charectorImg)
charectorImg.classList.add('title-hidden')

// marquee fadein

const marquee = document.querySelector('.marquee')

const revealMarquee = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('marquee-hidden')

  observer.unobserve(entry.target)
}

const marqueeObserver = new IntersectionObserver(revealMarquee, {
  root: null,
  threshold: 0.5,
})

marqueeObserver.observe(marquee)
marquee.classList.add('marquee-hidden')

// Slider btn slide up

const sliderBtn = document.querySelector('.slider-btn')

const revealSliderBtn = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const sliderBtnObserver = new IntersectionObserver(revealSliderBtn, {
  root: null,
  threshold: 0.75,
})

sliderBtnObserver.observe(sliderBtn)
sliderBtn.classList.add('title-hidden')

// charector tabs

const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
  root: null,
  threshold: 1,
}

const appearOnScroll = new IntersectionObserver(function (
  enteries,
  appearOnScroll
) {
  enteries.forEach(entry => {
    if (!entry.isIntersecting) return

    entry.target.classList.add('appear')

    appearOnScroll.unobserve(entry.target)
  })
},
appearOptions)

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})
