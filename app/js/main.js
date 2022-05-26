const links = document.querySelectorAll(".header__link, .header__arrow--thin-link");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


// arrow language 
const arrowLangPosition = document.querySelector('.header__arrow--bold');
const langMenu = document.querySelector('.header__lang');
const arrowlangRotate = document.querySelector('.arrow');

arrowLangPosition.addEventListener('click', () => {
  arrowLangPosition.classList.toggle('open');
  langMenu.classList.toggle('open');
  arrowlangRotate.classList.toggle('open');
})

// arrow menu
const arrowMenuPosition = document.querySelector('.header__arrow--desc');
const menu = document.querySelector('.header__nav');
const arrowMenuRotate = document.querySelector('.arrow--desc');
const headerHorizontalLine = document.querySelector('.header__line--horizontal');



arrowMenuRotate.addEventListener('click', () => {
  arrowMenuPosition.classList.toggle('open');
  arrowMenuRotate.classList.toggle('open');
  menu.classList.toggle('open');
  headerHorizontalLine.classList.toggle('open');
  langMenu.classList.toggle('open');
  console.log('1111');
})


// arrow description

const arrowDescription = document.querySelector('.arrow-description');
const descriptionText = document.querySelector('.description__info-drop');

arrowDescription.addEventListener('click', () => {
  descriptionText.classList.toggle('open');
  console.log('111');
})




const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  slidesPerView: 'auto',
  // slidesOffsetBefore: -20,
  // slidesOffsetAfter: -100,
  // loop: true,
});

swiper.isBeginning
swiper.isEnd