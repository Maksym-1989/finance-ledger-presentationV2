import './sass/main.scss';
import $ from 'jquery';

const headerRef = document.querySelector('header');
const inputEmailRef = document.getElementById('email');
const errorMessageRef = document.querySelector('.form_error-message');

window.addEventListener('scroll', function () {
  headerRef.classList.toggle('sticky', window.scrollY > 0);
});

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - headerRef.offsetHeight + 1,
        },
        800,
      );
    }
  });
});


inputEmailRef.addEventListener('focus', function (e) {
  errorMessageRef.classList.add('form_error-message--hide');
});

inputEmailRef.addEventListener('blur', function (e) {
  const { value } = e.target;
  if (!value) {
    errorMessageRef.classList.remove('form_error-message--hide');
  }
});
