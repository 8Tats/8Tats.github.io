'use strict';

let _searchIcon = document.querySelector('.searchIcon'),
    _search = document.getElementById('searchInput'),
    _shoppingCart = document.querySelector('.shoppingCart');

_searchIcon.onclick = function() {
  _search.classList.toggle('searchInputActive');
  _shoppingCart.classList.toggle('shoppingCartActive');
};
////////

let btnLight = document.querySelector('.dlBtn1'),
    btnDark = document.querySelector('.dlBtn2'),
    headerLogo = document.querySelector('.headerLogo'),
    networkLight = document.querySelector('.network'),
    contactsLight = document.querySelector('.contacts'),
    searchLight = document.querySelector('.search'),
    cartLight = document.querySelector('.cart'),
    mainSecion = document.querySelector('.section-1'),
    headerLight = document.querySelector('.header'),
    infoCompanyLight = document.querySelector('.infoCompany'),
    animationBtnLight = document.querySelector('.animationBtn'),
    animationBtnLight2 = document.querySelector('.animationBtn2'),
    animationBtnLight3 = document.querySelector('.animationBtn3'),
    animationBtnLight4 = document.querySelector('.animationBtn4'),
    subsequentSectionLight = document.querySelector('.subsequentSection'),
    contentBoxLight = document.querySelector('.contentBox'),
    section3WrapLight = document.querySelector('.section-3_wrap'),
    section7WrapLight = document.querySelector('.s7Wrap'),
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
  networkLight.classList.add('networkLight');
  contactsLight.classList.add('contactsLight');
  searchLight.classList.add('searchLight');
  contentBoxFooterLight.classList.add('contentBoxFooterLight');
  cartLight.classList.add('cartLight');
  contactsIcon1Light.classList.add('contactsIcon1Light');
  contactsIcon2Light.classList.add('contactsIcon2Light');
  contactsIcon3Light.classList.add('contactsIcon3Light');
  contactsIcon4Light.classList.add('contactsIcon4Light');
  mainSecion.classList.add('section-1Light');
  headerLight.classList.add('headerLight');
  infoCompanyLight.classList.add('infoCompanyLight');
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
  networkLight.classList.remove('networkLight');
  contactsLight.classList.remove('contactsLight');
  searchLight.classList.remove('searchLight');
  section5Wrap.classList.remove('section-5_wrapLight');
  contentBoxFooterLight.classList.remove('contentBoxFooterLight');
  cartLight.classList.remove('cartLight');
  contactsIcon1Light.classList.remove('contactsIcon1Light');
  contactsIcon2Light.classList.remove('contactsIcon2Light');
  contactsIcon3Light.classList.remove('contactsIcon3Light');
  contactsIcon4Light.classList.remove('contactsIcon4Light');
  mainSecion.classList.remove('section-1Light');
  headerLight.classList.remove('headerLight');
  section7WrapLight.classList.remove('s7WrapLight');
  section6WrapLight.classList.remove('s6WrapLight');
  s7ContentBox.classList.remove('s7-contentBoxLight');
  s6ContentBox.classList.remove('s6-contentBoxLight');
  infoCompanyLight.classList.remove('infoCompanyLight');
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
