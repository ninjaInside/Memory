let next = document.getElementById('_next');
let prev = document.getElementById('_prev');
let img = document.getElementById('pic');
let x = 0;

setInterval(() => {
  if (x === -1500) {
    x = 0
    img.style.left = x + 'px';
  }

  x += -500;

  img.style.left = x + 'px';
}, 2000)

$(document).ready(function(){
  PopUpHideO();
}) 

function PopUpShowO() {
  $('#popUpO').show();
}

function PopUpHideO() {
  $('#popUpO').hide();
}

$(document).ready(function(){
  PopUpHideT();
}) 

function PopUpShowT() {
  $('#popUpT').show();
}

function PopUpHideT() {
  $('#popUpT').hide();
}


$(document).ready(function(){
  PopUpHideTh();
}) 

function PopUpShowTh() {
  $('#popUpTh').show();
}

function PopUpHideTh() {
  $('#popUpTh').hide();
}


$(document).ready(function(){
  PopUpHideF();
}) 

function PopUpShowF() {
  $('#popUpF').show();
}

function PopUpHideF() {
  $('#popUpF').hide();
}


$(document).ready(function(){
  PopUpHideFv();
}) 

function PopUpShowFv() {
  $('#popUpFv').show();
}

function PopUpHideFv() {
  $('#popUpFv').hide();
}


$(document).ready(function(){
  PopUpHideSx();
}) 

function PopUpShowSx() {
  $('#popUpSx').show();
}

function PopUpHideSx() {
  $('#popUpSx').hide();
}


$(document).ready(function(){
  PopUpHideS();
}) 

function PopUpShowS() {
  $('#popUpS').show();
}

function PopUpHideS() {
  $('#popUpS').hide();
}


$(document).ready(function(){
  PopUpHideE()
}) 

function PopUpShowE() {
  $('#popUpE').show();
}

function PopUpHideE() {
  $('#popUpE').hide();
}

// script sandwich

let hideSandwich = document.getElementById('button-on-sandwich');
let sandwich = document.getElementById('icon__icon_sand');
let count = 0;

hideSandwich.addEventListener("click", $hideSandwich);

function $hideSandwich() {
  if (count == 1) {
    sandwich.style.visibility = "hidden";
    return count = 0;
  }
    sandwich.style.visibility = "visible";
    count = 1;
} 
