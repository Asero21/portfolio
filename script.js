// Toggle

const toggleLandingPageToProjects = document.getElementsByClassName("toggle-projects")[0]

const toggleLandingPageToSkills = document.getElementsByClassName("toggle-skills")[0]

const toggleLandingPageToContacts = document.getElementsByClassName("toggle-contacts")[0]

const toggleProjects = document.getElementsByClassName('toggle-projects')[0]

const toggleSkills = document.getElementsByClassName('toggle-skills')[0]

const toggleContacts = document.getElementsByClassName('toggle-contacts')[0]


// Switch

const pageSwitch = document.getElementsByClassName('page-switch')[0]

const pageSwitch2 = document.getElementsByClassName('page-switch2')[0]
const pageSwitch3 = document.getElementsByClassName('page-switch3')[0]

const pageSwitch4 = document.getElementsByClassName('page-switch4')[0]

//

toggleLandingPageToProjects.addEventListener('click', () => {
  pageSwitch.classList.toggle('active')
})

toggleProjects.addEventListener('click', () => {
  pageSwitch2.classList.toggle('active')
})

toggleLandingPageToSkills.addEventListener('click', () => {
  pageSwitch.classList.toggle('active')
})

toggleSkills.addEventListener('click', () => {
  pageSwitch3.classList.toggle('active')
})

toggleLandingPageToContacts.addEventListener('click', () => {
  pageSwitch.classList.toggle('active')
})

toggleContacts.addEventListener('click', () => {
  pageSwitch4.classList.toggle('active')
})




// const toggleSearch = document.getElementsByClassName('toggle-search')[0]
// const searchBar = document.getElementsByClassName('search-bar')[0]

// toggleSearch.addEventListener('click', () => {
//   searchBar.classList.toggle('active')
// });