'use strict';

let letpop = document.getElementById('pop'),
    letbutton = document.getElementById('button'),
    letspan = document.querySelector('.close')

letbutton.onclick = function() {
    letpop.style.display="block";
}