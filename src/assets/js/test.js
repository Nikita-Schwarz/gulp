const button = document.querySelector('.nav__link')
const subnav = document.querySelector('.subnav__list')
const menuLinks = document.querySelectorAll('.subnav__link')

button.addEventListener('click', (e) => {
  subnav.classList.toggle('active')

  if (button.classList.contains('active')) {
    button.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
    menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
  } else {
    button.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
  }
})
