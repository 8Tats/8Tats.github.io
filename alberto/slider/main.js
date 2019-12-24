let nextBtn = document.getElementById('next'),
    prevBtn = document.getElementById('prev'),
    nextBtnActive = 0;
    prevBtnActive = -640;

nextBtn.onclick = function() {
  let slides = document.querySelector('.slides');
  nextBtnActive -= 128;
  if (nextBtnActive < -512) {
    nextBtnActive = 0;
  }
  slides.style.left = nextBtnActive + 'px';
}
prevBtn.onclick = function() {
  let slides = document.querySelector('.slides');
  prevBtnActive += 128;
  if (prevBtnActive > 0) {
    prevBtnActive = -512;
  }
  slides.style.left = prevBtnActive + 'px';
}
