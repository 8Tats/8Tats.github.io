'use strict';

let _searchIcon = document.querySelector('.searchIcon'),
    _search = document.getElementById('searchInput'),
    _shoppingCart = document.querySelector('.shoppingCart');

_searchIcon.onclick = function() {
  _search.classList.toggle('searchInputActive');
  _shoppingCart.classList.toggle('shoppingCartActive');
};

let _headerNavBtn = document.querySelector('.headerNavBtn'),
    _headerNavWindow = document.querySelector('.headerNavWindow'),
    _infoCompany = document.querySelector('.infoCompany'),
    _mainHeadlineWrap = document.querySelector('.mainHeadlineWrap');

_headerNavBtn.onclick = function() {
  _headerNavBtn.classList.toggle('headerNavBtnActive');
  _headerNavWindow.classList.toggle('headerNavWindowActive');
  _mainHeadlineWrap.classList.toggle('mainHeadlineWrapActive');
  _infoCompany.classList.toggle('infoCompanyActive');
};

const mainSectionAnchor = document.querySelectorAll('a[href*="#"]')
for(let anchor of mainSectionAnchor) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};

document.getElementById("buttonUp").onclick = function scrollUpFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById('buttonUp').style.display = "block";
  } else {
    document.getElementById('buttonUp').style.display = "none";
  }
}

let animateBtn1 = document.getElementById('animateBtn1'),
    animateBtn2 = document.getElementById('animateBtn2'),
    animateBtn3 = document.getElementById('animateBtn3'),
    animateBtn4 = document.getElementById('animateBtn4'),
    animateBtn5 = document.getElementById('animateBtn5');
setInterval(function() {
     animateBtn1.classList.toggle('animateBtn1Active');
     animateBtn2.classList.toggle('animateBtn2Active');
     animateBtn3.classList.toggle('animateBtn3Active');
     animateBtn4.classList.toggle('animateBtn4Active');
     animateBtn5.classList.toggle('animateBtn5Active');
   }, 800);

////////
let btnLight = document.querySelector('.dlBtn1'),
    btnDark = document.querySelector('.dlBtn2'),
    headerLogo = document.querySelector('.headerLogo'),
    swiperButtonNext = document.querySelector('.swiper-button-next'),
    swiperButtonPrev = document.querySelector('.swiper-button-prev'),
    slide1Light = document.querySelector('.slide-1'),
    networkLight = document.querySelector('.network'),
    s2Arrow = document.querySelector('.s2-arrow'),
    s3Arrow = document.querySelector('.s3-arrow'),
    s4Arrow = document.querySelector('.s4-arrow'),
    s5Arrow = document.querySelector('.s5-arrow'),
    s6Arrow = document.querySelector('.s6-arrow'),
    s7Arrow = document.querySelector('.s7-arrow'),
    s8Arrow = document.querySelector('.s8-arrow'),
    _headhesive = document.querySelector('.headhesive'),
    contactsLight = document.querySelector('.contacts'),
    animationBtnLight = document.querySelector('.animationBtn'),
    animationBtnLight2 = document.querySelector('.animationBtn2'),
    animationBtnLight3 = document.querySelector('.animationBtn3'),
    animationBtnLight4 = document.querySelector('.animationBtn4'),
    animationBtnLight5 = document.querySelector('.animationBtn5'),
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
    headerNavWindowLink_insideWrap = document.querySelector('.headerNavWindowLink_insideWrap'),
    headerNavWindowLink_doubleInsideWrap = document.querySelector('.headerNavWindowLink_doubleInsideWrap'),
    // headerLight = document.querySelector('.header'),
    headerNavWindowLink2 = document.querySelector('.headerNavWindowLink2'),
    headerNavWindowLink3 = document.querySelector('.headerNavWindowLink3'),
    _headerNavWindowLink = document.querySelector('.headerNavWindowLink'),
    _headerNavWindowLink1 = document.querySelector('.headerNavWindowLink1'),
    headerNavWindowLink1_inside = document.querySelector('.headerNavWindowLink1_inside'),
    section5Wrap = document.querySelector('.section-5_wrap');


btnLight.onclick = function() {
  btnDark.style.display = "block";
  btnLight.style.display = "none";
  headerLogo.classList.add('headerLogoLight');
  slide1Light.classList.add('slide-1Light');
  // headerLight.classList.add('headerLight');
  s8ContentBoxLight.classList.add('s8-contentBoxLight');
  swiperButtonNext.classList.add('swiper-button-nextLight');
  s2Arrow.classList.add('s2-arrowLight');
  s3Arrow.classList.add('s3-arrowLight');
  s4Arrow.classList.add('s4-arrowLight');
  s5Arrow.classList.add('s5-arrowLight');
  s6Arrow.classList.add('s6-arrowLight');
  s7Arrow.classList.add('s7-arrowLight');
  s8Arrow.classList.add('s8-arrowLight');
  networkLight.classList.add('networkLight');
  contactsLight.classList.add('contactsLight');
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
  animationBtnLight5.classList.add('animationBtn5Light');
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
  // headerLight.classList.remove('headerLight');
  section5Wrap.classList.remove('section-5_wrapLight');
  slide1Light.classList.remove('slide-1Light');
  s2Arrow.classList.remove('s2-arrowLight');
  s3Arrow.classList.remove('s3-arrowLight');
  s4Arrow.classList.remove('s4-arrowLight');
  s5Arrow.classList.remove('s5-arrowLight');
  s6Arrow.classList.remove('s6-arrowLight');
  s7Arrow.classList.remove('s7-arrowLight');
  s8Arrow.classList.remove('s8-arrowLight');
  contentBoxFooterLight.classList.remove('contentBoxFooterLight');
  contactsIcon1Light.classList.remove('contactsIcon1Light');
  networkLight.classList.remove('networkLight');
  contactsLight.classList.remove('contactsLight');
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
  animationBtnLight5.classList.remove('animationBtn5Light');
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

let windowLinkWrapServices = document.querySelector('.windowLinkWrapServices'),
    windowLinkWrapper1 = document.querySelector('.windowLinkWrapper1');

windowLinkWrapServices.onclick = function() {
  windowLinkWrapper1.classList.toggle('windowLinkWrapper1Active');
};
