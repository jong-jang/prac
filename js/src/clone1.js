// clone1.js

var moDal = document.getElementsByClassName('modal')[0];
var moD = moDal.getElementsByClassName('modal_content')[0];
var moB = moD.getElementsByTagName('button')[0];

moB.addEventListener('click', function(event){
  event.preventDefault();

  moDal.style.display = "none";
})