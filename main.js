const about = document.getElementById('link-about')
const experience = document.getElementById('link-experience')
const reason = document.getElementById('link-reason')
const email = document.getElementById('email')

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

email.onclick = e => {
  window.open('mailto:michelle210181@gmail.com')
}
