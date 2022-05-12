const tabs = document.querySelectorAll('.charector-tab')
const tabsContainer = document.querySelector('.charector-tabs')
const tabsContent = document.querySelectorAll('.slider-item')

// tabs.forEach(tab =>
//   tab.addEventListener('click', () => {
//     console.log('tab')
//   })
// )

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.charector-tab')

  // guard clause
  if (!clicked) return

  // active tab
  tabs.forEach(tab => tab.classList.remove('active-tab'))

  clicked.classList.add('active-tab')

  // activate content area
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('active-slider-item')
  )

  document
    .querySelector(`.slider-item-${clicked.dataset.tab}`)
    .classList.add('active-slider-item')
})
