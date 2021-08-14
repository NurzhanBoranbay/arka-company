
const burger = document.querySelector('.header__click');
const nav = document.querySelector('.nav');
const footer = document.querySelectorAll('.footer__list');
const showFooter = document.querySelectorAll('.list__link');

const list = document.querySelectorAll('a')
list.forEach(l => {
  l.addEventListener('click', event => {
    event.preventDefault();
  })
})

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
})

showFooter.forEach(f => {
  f.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.classList.contains('list-1')) {
      footer[0].classList.toggle('active');
    }

    if (event.target.classList.contains('list-2')) {
      footer[1].classList.toggle('active');
    }

    if (event.target.classList.contains('list-3')) {
      footer[2].classList.toggle('active');
    }
  });
});