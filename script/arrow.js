const mybutton = document.getElementById("button-scroll");
const arrow = document.querySelector('.totop-arrow');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    arrow.classList.add('show');
  } else {
    mybutton.style.display = "none";
    arrow.classList.remove('show');
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
