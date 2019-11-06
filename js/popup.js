// PopUp Window scripts

function cache(key, value) {

  if (typeof(value) == 'undefined') {
    return cache[key];
  }

  cache[key] = value;

}

function _id_(id) {

  if (!cache(id)) {
    cache(id, document.getElementById(id));
  }

  return cache(id);

}

function _select_(selector) {

  if (!cache(selector)) {
    cache(selector, document.querySelector(selector))
  }

  return cache(selector)

}

let defoltClientWidth;


setTimeout(() => defoltClientWidth = document.documentElement.clientWidth, 1000)


$(document).ready(function(){
  PopUpHideO();
}); 

function PopUpShowO() {
  $(_id_('popUpO')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.documentElement.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;

}

function PopUpHideO() {
  $(_id_('popUpO')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}

$(document).ready(function(){
  PopUpHideT();
});

function PopUpShowT() {
  $(_id_('popUpT')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideT() {
  $(_id_('popUpT')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}


$(document).ready(function(){
  PopUpHideTh();
});

function PopUpShowTh() {
  $(_id_('popUpTh')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideTh() {
  $(_id_('popUpTh')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}


$(document).ready(function(){
  PopUpHideF();
}); 

function PopUpShowF() {
  $(_id_('popUpF')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideF() {
  $(_id_('popUpF')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}


$(document).ready(function(){
  PopUpHideFv();
}); 

function PopUpShowFv() {
  $(_id_('popUpFv')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideFv() {
  $(_id_('popUpFv')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}


$(document).ready(function(){
  PopUpHideSx();
}); 

function PopUpShowSx() {
  $(_id_('popUpSx')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideSx() {
  $(_id_('popUpSx')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}


$(document).ready(function(){
  PopUpHideS();
}); 

function PopUpShowS() {
  $(_id_('popUpS')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideS() {
  $(_id_('popUpS')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}


$(document).ready(function(){
  PopUpHideE();
}); 

function PopUpShowE() {
  $(_id_('popUpE')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideE() {
  $(_id_('popUpE')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}

$(document).ready(function(){
  PopUpHideG();
});

function PopUpShowG() {
  $(_id_('popUpG')).show();
  document.body.style.overflow = "hidden";
  let clientWidthNow = document.body.clientWidth;
  let paddingFlame = clientWidthNow - defoltClientWidth;
  _select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  _select_(".header").style.paddingRight = `${paddingFlame}px`;
  _select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  document.body.paddingRight = `${paddingFlame}px`;
}

function PopUpHideG() {
  $(_id_('popUpG')).hide();
  document.body.style.overflow = "";
  _select_(".nav_and_logo").style.paddingRight = "";
  _select_(".header").style.paddingRight = "";
  _select_(".main_block").style.paddingRight = "";
  document.body.paddingRight = ""
}
