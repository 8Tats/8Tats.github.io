'use strict';

let _searchIcon = document.querySelector('.searchIcon'),
    _search = document.getElementById('searchInput'),
    _shoppingCart = document.querySelector('.shoppingCart');

_searchIcon.onclick = function() {
  _search.classList.toggle('searchInputActive');
  _shoppingCart.classList.toggle('shoppingCartActive');
};
////////

const mainSectionAnchor = document.querySelectorAll('a[href*="#"]')
for(let anchor of mainSectionAnchor) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};


////////
let btnLight = document.querySelector('.dlBtn1'),
    btnDark = document.querySelector('.dlBtn2'),
    headerLogo = document.querySelector('.headerLogo'),
    swiperButtonNext = document.querySelector('.swiper-button-next'),
    swiperButtonPrev = document.querySelector('.swiper-button-prev'),
    slide1Light = document.querySelector('.slide-1'),
    animationBtnLight = document.querySelector('.animationBtn'),
    animationBtnLight2 = document.querySelector('.animationBtn2'),
    animationBtnLight3 = document.querySelector('.animationBtn3'),
    animationBtnLight4 = document.querySelector('.animationBtn4'),
    subsequentSectionLight = document.querySelector('.subsequentSection'),
    contentBoxLight = document.querySelector('.contentBox'),
    section8WrapLight = document.querySelector('.section-8_wrap'),
    section3WrapLight = document.querySelector('.section-3_wrap'),
    section7WrapLight = document.querySelector('.s7Wrap'),
    s8ContentBoxLight = document.querySelector('.s8-contentBox'),
    section6WrapLight = document.querySelector('.s6Wrap'),
    s3ContentBox = document.querySelector('.s3-contentBox'),
    s3RightBoxLight = document.querySelector('.s3-rightBox'),
    section4Wrap = document.querySelector('.section-4_wrap'),
    footerWraplight = document.querySelector('.footerWrap'),
    contactsIcon1Light = document.querySelector('.contactsIcon1'),
    contactsIcon2Light = document.querySelector('.contactsIcon2'),
    contactsIcon3Light = document.querySelector('.contactsIcon3'),
    contactsIcon4Light = document.querySelector('.contactsIcon4'),
    contentBoxFooterLight = document.querySelector('.contentBoxFooter'),
    s4ContentBox = document.querySelector('.s4-contentBox'),
    s7ContentBox = document.querySelector('.s7-contentBox'),
    s6ContentBox = document.querySelector('.s6-contentBox'),
    s5ContentBox = document.querySelector('.s5-contentBox'),
    section5Wrap = document.querySelector('.section-5_wrap');

btnLight.onclick = function() {
  btnDark.style.display = "block";
  btnLight.style.display = "none";
  headerLogo.classList.add('headerLogoLight');
  slide1Light.classList.add('slide-1Light');
  s8ContentBoxLight.classList.add('s8-contentBoxLight');
  swiperButtonNext.classList.add('swiper-button-nextLight');
  swiperButtonPrev.classList.add('swiper-button-prevLight');
  contentBoxFooterLight.classList.add('contentBoxFooterLight');
  contactsIcon1Light.classList.add('contactsIcon1Light');
  contactsIcon2Light.classList.add('contactsIcon2Light');
  contactsIcon3Light.classList.add('contactsIcon3Light');
  section8WrapLight.classList.add('section-8_wrapLight');
  contactsIcon4Light.classList.add('contactsIcon4Light');
  animationBtnLight.classList.add('animationBtnLight');
  animationBtnLight2.classList.add('animationBtn2Light');
  animationBtnLight3.classList.add('animationBtn3Light');
  animationBtnLight4.classList.add('animationBtn4Light');
  subsequentSectionLight.classList.add('subsequentSectionLight');
  contentBoxLight.classList.add('contentBoxLight');
  section3WrapLight.classList.add('section-3_wrapLight');
  section7WrapLight.classList.add('s7WrapLight');
  section6WrapLight.classList.add('s6WrapLight');
  s3ContentBox.classList.add('s3-contentBoxLight');
  s3RightBoxLight.classList.add('s3-rightBoxLight');
  section4Wrap.classList.add('section-4_wrapLight');
  s4ContentBox.classList.add('s4-contentBoxLight');
  s7ContentBox.classList.add('s7-contentBoxLight');
  s6ContentBox.classList.add('s6-contentBoxLight');
  s5ContentBox.classList.add('s5-contentBoxLight');
  section5Wrap.classList.add('section-5_wrapLight');
  footerWraplight.classList.add('footerWrapLight');
};

btnDark.onclick = function() {
  btnLight.style.display = "block"
  btnDark.style.display = "none"
  headerLogo.classList.remove('headerLogoLight');
  s8ContentBoxLight.classList.remove('s8-contentBoxLight');
  swiperButtonNext.classList.remove('swiper-button-nextLight');
  swiperButtonPrev.classList.remove('swiper-button-prevLight');
  section8WrapLight.classList.remove('section-8_wrapLight');
  section5Wrap.classList.remove('section-5_wrapLight');
  contentBoxFooterLight.classList.remove('contentBoxFooterLight');
  contactsIcon1Light.classList.remove('contactsIcon1Light');
  contactsIcon2Light.classList.remove('contactsIcon2Light');
  contactsIcon3Light.classList.remove('contactsIcon3Light');
  contactsIcon4Light.classList.remove('contactsIcon4Light');
  section7WrapLight.classList.remove('s7WrapLight');
  section6WrapLight.classList.remove('s6WrapLight');
  s7ContentBox.classList.remove('s7-contentBoxLight');
  s6ContentBox.classList.remove('s6-contentBoxLight');
  animationBtnLight.classList.remove('animationBtnLight');
  animationBtnLight2.classList.remove('animationBtn2Light');
  animationBtnLight3.classList.remove('animationBtn3Light');
  animationBtnLight4.classList.remove('animationBtn4Light');
  subsequentSectionLight.classList.remove('subsequentSectionLight');
  contentBoxLight.classList.remove('contentBoxLight');
  section3WrapLight.classList.remove('section-3_wrapLight');
  s3ContentBox.classList.remove('s3-contentBoxLight');
  s3RightBoxLight.classList.remove('s3-rightBoxLight');
  section4Wrap.classList.remove('section-4_wrapLight');
  s4ContentBox.classList.remove('s4-contentBoxLight');
  s5ContentBox.classList.remove('s5-contentBoxLight');
  footerWraplight.classList.remove('footerWrapLight');
};
