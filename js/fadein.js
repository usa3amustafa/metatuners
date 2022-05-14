// fade in

const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
  root: null,
  threshold: 0.5,
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
