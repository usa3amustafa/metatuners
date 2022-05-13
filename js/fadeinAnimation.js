// nav slide down

const navHomepage = document.querySelector('.nav-homepage')

const revealnavHomepage = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('nav-hidden')

  observer.unobserve(entry.target)
}

const navHomepageObserver = new IntersectionObserver(revealnavHomepage, {
  root: null,
  threshold: 0,
})

navHomepageObserver.observe(navHomepage)
navHomepage.classList.add('nav-hidden')

// welcome section title text slide up

const welcomeSectionTitles = document.querySelectorAll('.welcome-section-title')

const revealWelcomeSectionTitle = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const welcomeSectionTitleObserver = new IntersectionObserver(
  revealWelcomeSectionTitle,
  {
    root: null,
    threshold: 0.25,
  }
)

welcomeSectionTitles.forEach(welcomeSectionTitle => {
  welcomeSectionTitleObserver.observe(welcomeSectionTitle)
  welcomeSectionTitle.classList.add('title-hidden')
})

// welcome section  text slide up

const welcomeSectionTexts = document.querySelectorAll('.welcome-section-desc')

const revealWelcomeSectionTexts = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('text-hidden')

  observer.unobserve(entry.target)
}

const welcomeSectionTextsObserver = new IntersectionObserver(
  revealWelcomeSectionTexts,
  {
    root: null,
    threshold: 0.25,
  }
)

welcomeSectionTexts.forEach(welcomeSectionText => {
  welcomeSectionTextsObserver.observe(welcomeSectionText)
  welcomeSectionText.classList.add('text-hidden')
})

// welcome section link

const welcomeSectionLink = document.querySelector('.welcome-section-link')

const revealWelcomeSectionLink = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('link-hidden')

  observer.unobserve(entry.target)
}

const welcomeSectionLinkObserver = new IntersectionObserver(
  revealWelcomeSectionLink,
  {
    root: null,
    threshold: 0.25,
  }
)

welcomeSectionLinkObserver.observe(welcomeSectionLink)
welcomeSectionLink.classList.add('link-hidden')

// welcome section social link

const welcomeSectionSocialLinks = document.querySelector(
  '.welcome-section-social-links'
)

const revealWelcomeSectionSocialLinks = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('welcome-section-social-links-hidden')

  observer.unobserve(entry.target)
}

const welcomeSectionSocialLinksObserver = new IntersectionObserver(
  revealWelcomeSectionSocialLinks,
  {
    root: null,
    threshold: 0.25,
  }
)

welcomeSectionSocialLinksObserver.observe(welcomeSectionSocialLinks)
welcomeSectionSocialLinks.classList.add('welcome-section-social-links-hidden')
