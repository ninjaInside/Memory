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




let $vk = document.getElementById('iconVK');

$vk.onmouseover = () => {
	let line = document.getElementById('decVK');

	line.style.width = "100%"
}

$vk.onmouseout = () => {
	let line = document.getElementById('decVK');

	line.style.width = "4px"
}

let $telegram = document.getElementById('iconTEL');

$telegram.onmouseover = () => {
	let line = document.getElementById('decTEL');

	line.style.width = "100%"
}

$telegram.onmouseout = () => {
	let line = document.getElementById('decTEL');

	line.style.width = "4px"
}

let $twitter = document.getElementById('iconTWI');

$twitter.onmouseover = () => {
	let line = document.getElementById('decTWI');

	line.style.width = "100%"
}

$twitter.onmouseout = () => {
	let line = document.getElementById('decTWI');

	line.style.width = "4px"
}

let $instagram = document.getElementById('iconINST');

$instagram.onmouseover = () => {
	let line = document.getElementById('decINST');

	line.style.width = "100%"
}

$instagram.onmouseout = () => {
	let line = document.getElementById('decINST');

	line.style.width = "4px"
}


let $humanPhotoOne = document.getElementById('humanBlockOne');

$humanPhotoOne.onmouseover = () => {
  let $image = document.getElementById('imageBlockOne')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoOne.onmouseout = () => {
  let $image = document.getElementById('imageBlockOne')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

let $humanPhotoTwo = document.getElementById('humanBlockTwo');

$humanPhotoTwo.onmouseover = () => {
  let $image = document.getElementById('imageBlockTwo')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoTwo.onmouseout = () => {
  let $image = document.getElementById('imageBlockTwo')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

let $humanPhotoTh = document.getElementById('humanBlockTh');

$humanPhotoTh.onmouseover = () => {
  let $image = document.getElementById('imageBlockTh')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoTh.onmouseout = () => {
  let $image = document.getElementById('imageBlockTh')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

let $humanPhotoF = document.getElementById('humanBlockF');

$humanPhotoF.onmouseover = () => {
  let $image = document.getElementById('imageBlockF')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoF.onmouseout = () => {
  let $image = document.getElementById('imageBlockF')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

let $humanPhotoFv = document.getElementById('humanBlockFv');

$humanPhotoFv.onmouseover = () => {
  let $image = document.getElementById('imageBlockFv')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoFv.onmouseout = () => {
  let $image = document.getElementById('imageBlockFv')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

let $humanPhotoSx = document.getElementById('humanBlockSx');

$humanPhotoSx.onmouseover = () => {
  let $image = document.getElementById('imageBlockSx')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoSx.onmouseout = () => {
  let $image = document.getElementById('imageBlockSx')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

let $humanPhotoS = document.getElementById('humanBlockS');

$humanPhotoS.onmouseover = () => {
  let $image = document.getElementById('imageBlockS')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoS.onmouseout = () => {
  let $image = document.getElementById('imageBlockS')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

let $humanPhotoE = document.getElementById('humanBlockE');

$humanPhotoE.onmouseover = () => {
  let $image = document.getElementById('imageBlockE')

  $image.style.transform = "scale(1.2)";
  $image.style.filter = "blur(2px)";
}

$humanPhotoE.onmouseout = () => {
  let $image = document.getElementById('imageBlockE')

  $image.style.transform = "scale(1)";
  $image.style.filter = "blur(0px)";
}

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


