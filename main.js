const about = document.getElementById('link-about')
const experience = document.getElementById('link-experience')
const reason = document.getElementById('link-reason')
const email = document.getElementById('email')
const sidebar = document.querySelector('.sidebar')
const photo = document.querySelector('.photo')
const nav = document.querySelector('.nav')
const aboutField = document.getElementById('about')
const experienceField = document.getElementById('experience')

email.onclick = e => {
  window.open('mailto:michelle210181@gmail.com')
}

window.addEventListener('scroll', () => {
  if (document.body.offsetWidth < 425) {
    const condition = sidebar.offsetHeight
    if (window.scrollY >= condition) {
      sidebar.style.position = 'fixed'
      photo.style.display = 'none'
      nav.style.paddingTop = '10px'
    } else {
      sidebar.style.position = 'relative'
      photo.style.display = 'block'
      nav.style.paddingTop = '10px'
    }
  }
})

window.addEventListener('scroll', () => {
  if (document.body.offsetWidth <= 425) {
    const aboutHeight = sidebar.offsetHeight
    const experienceHeight = sidebar.offsetHeight + aboutField.offsetHeight
    const reasonHeight =
      sidebar.offsetHeight +
      aboutField.offsetHeight +
      experienceField.offsetHeight
    if (window.scrollY >= aboutHeight) {
      about.classList.add('active')
      experience.classList.remove('active')
      reason.classList.remove('active')
    }
    if (window.scrollY >= experienceHeight) {
      about.classList.remove('active')
      experience.classList.add('active')
      reason.classList.remove('active')
    }
    if (window.scrollY >= reasonHeight) {
      about.classList.remove('active')
      experience.classList.remove('active')
      reason.classList.add('active')
    }
  }
})

window.addEventListener('scroll', () => {
  if (document.body.offsetWidth > 425) {
    const aboutHeight = 0
    const experienceHeight = aboutField.offsetHeight
    const reasonHeight = aboutField.offsetHeight + experienceField.offsetHeight
    if (window.scrollY >= aboutHeight) {
      about.classList.add('active')
      experience.classList.remove('active')
      reason.classList.remove('active')
    }
    if (window.scrollY >= experienceHeight) {
      about.classList.remove('active')
      experience.classList.add('active')
      reason.classList.remove('active')
    }
    if (window.scrollY >= reasonHeight) {
      about.classList.remove('active')
      experience.classList.remove('active')
      reason.classList.add('active')
    }
  }
})
