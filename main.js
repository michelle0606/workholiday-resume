const about = document.getElementById('link-about')
const experience = document.getElementById('link-experience')
const reason = document.getElementById('link-reason')

about.onclick = e => {
  about.classList.add('active')
  experience.classList.remove('active')
  reason.classList.remove('active')
}

experience.onclick = e => {
  about.classList.remove('active')
  experience.classList.add('active')
  reason.classList.remove('active')
}

reason.onclick = e => {
  about.classList.remove('active')
  experience.classList.remove('active')
  reason.classList.add('active')
}
