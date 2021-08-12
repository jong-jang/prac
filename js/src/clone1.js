// clone1.js

// 변수
var moDal = document.getElementsByClassName('modal')[0];
var moD = moDal.getElementsByClassName('modal_content')[0];
var moB = moD.getElementsByTagName('button')[0];
// ------------------------------------------------------
var con1 = document.getElementsByClassName('con_01')[0];
var con2 = document.getElementsByClassName('con_02')[0];
var con3 = document.getElementsByClassName('con_03')[0];
var con4 = document.getElementsByClassName('con_04')[0];
var con5 = document.getElementsByClassName('con_05')[0];
var con6 = document.getElementsByClassName('con_06')[0];
var con7 = document.getElementsByClassName('con_07')[0];
var con8 = document.getElementsByClassName('con_08')[0];
var con9 = document.getElementsByClassName('con_09')[0];
var otList = [con1, con2, con3 ,con4, con5, con6, con7, con8, con9];
var winH = screen.height;
var con7T = con7.getElementsByClassName('con_07_top')[0];
var con7Td = con7T.getElementsByTagName('div')[0];
var con7M = con7.getElementsByClassName('con_07_mid')[0];
var con7Md1 = con7M.getElementsByTagName('div')[0];
var con7Md2 = con7M.getElementsByTagName('div')[1];
var con7B = con7.getElementsByClassName('con_07_bot')[0];
var con7Bd = con7B.getElementsByTagName('div')[0];
var conList = [con7Td, con7Md1, con7Md2, con7Bd];
// ----------------------
const moveScrollFn = (otdata) => {
  var scTop = document.documentElement.scrollTop;
  var pd = scTop - 8618;
  var moveSc = scTop - otdata + winH;
  var moveScr = parseInt(moveSc/winH * 100);
  if(moveScr < 0){
    moveScr = 0;
  }else if(moveScr > 100){
    moveScr = 100;
  }

  return moveScr;
}
const pFn = (pset) => {
  let pt, pv, st;
  st = document.documentElement.scrollTop;
  pt = (st - pset.offsetTop)/1000;
  if(pt > 0){
    pt = 0;
  }
  console.log(pt);
  pv = 1 + pt;

  return pv;
}
const scrollFn = () => {
  let otLists, otone, moveline, pd, pv;
  let st = document.documentElement.scrollTop;
  pd = st - con6.offsetTop + winH/2;
  let i=0;
  let j=0;
  for(; j<otList.length; j++){
    otLists = otList[j].offsetTop;
    moveline = moveScrollFn(otLists);
    if(moveline >= 30){
      otList[j].classList.add('act');
    }
  }
  if(pd > 0){
    con6.parentElement.style.padding = 0+' '+(350-pd)+'px';
  }
  for(; i<conList.length; i++){
    pv = pFn(conList[i]);

    if(pv > 0){
      conList[i].style.opacity = pv;
    }
  }
}

// 이벤트
document.addEventListener('scroll', function(){
  scrollFn();
})

moB.addEventListener('click', function(event){
  event.preventDefault();

  moDal.style.display = "none";
})