const faders = document.querySelectorAll('.fade-in'),
  appearOptions = { root: null, threshold: 0.5 },
  appearOnScroll = new IntersectionObserver(function (e, r) {
    e.forEach(e => {
      e.isIntersecting &&
        (e.target.classList.add('appear'), r.unobserve(e.target))
    })
  }, appearOptions)
faders.forEach(e => {
  appearOnScroll.observe(e)
})
