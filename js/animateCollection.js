// collection section title text slide up

const collectionSectionTitle = document.querySelector(
  '.collection-section-title'
)

const revealcollectionSectionTitle = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('title-hidden')

  observer.unobserve(entry.target)
}

const collectionSectionTitleObserver = new IntersectionObserver(
  revealcollectionSectionTitle,
  {
    root: null,
    threshold: 1,
  }
)

collectionSectionTitleObserver.observe(collectionSectionTitle)
collectionSectionTitle.classList.add('title-hidden')

// collection section Text text slide up

const collectionSectionText = document.querySelector('.collection-desc')

const revealcollectionSectionText = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('text-hidden')

  observer.unobserve(entry.target)
}

const collectionSectionTextObserver = new IntersectionObserver(
  revealcollectionSectionText,
  {
    root: null,
    threshold: 0.5,
  }
)

collectionSectionTextObserver.observe(collectionSectionText)
collectionSectionText.classList.add('text-hidden')

// collection section imiages text slide up

// const collectionSectionImages = document.querySelectorAll('.collection-img')

// const collectionImages = document.querySelector('.collection-images')

// const revealcollectionSectionImages = function (enteries, observer) {
//   const [entry] = enteries

//   if (!entry.isIntersecting) return

//   entry.target.classList.remove('img-hidden')

//   observer.unobserve(entry.target)
// }

// const collectionImagesObserver = new IntersectionObserver(
//   revealcollectionSectionImages,
//   {
//     root: null,
//     threshold: 0.1,
//   }
// )

// collectionSectionImages.forEach(img => {
//   collectionImagesObserver.observe(img)
//   img.classList.add('img-hidden')
// })
