// slider

function cache(key, value) {

	if (typeof(value) == 'undefined') {
		return cache[key];
	}

	cache[key] = value;

}

function _id_(currentId) {

	cache(currentId, document.getElementById(currentId));

	return cache(currentId);

}

let x = 0;

let slider = setTimeout(function slide() {

  if (x === -1500) {
    x = 500;
    _id_('pic').style.left = x + 'px';
  }

  x += -500;

   _id_('pic').style.left = x + 'px';

  slider = setTimeout(slide, 2000)

}, 2000)

// PopUp Window scripts

$(document).ready(function(){
  PopUpHideO();
}) 

function PopUpShowO() {
  $(_id_('popUpO')).show();
}

function PopUpHideO() {
  $(_id_('popUpO')).hide();
}

$(document).ready(function(){
  PopUpHideT();
}) 

function PopUpShowT() {
  $(_id_('popUpT')).show();
}

function PopUpHideT() {
  $(_id_('popUpT')).hide();
}


$(document).ready(function(){
  PopUpHideTh();
}) 

function PopUpShowTh() {
  $(_id_('popUpTh')).show();
}

function PopUpHideTh() {
  $(_id_('popUpTh')).hide();
}


$(document).ready(function(){
  PopUpHideF();
}) 

function PopUpShowF() {
  $(_id_('popUpF')).show();
}

function PopUpHideF() {
  $(_id_('popUpF')).hide();
}


$(document).ready(function(){
  PopUpHideFv();
}) 

function PopUpShowFv() {
  $(_id_('popUpFv')).show();
}

function PopUpHideFv() {
  $(_id_('popUpFv')).hide();
}


$(document).ready(function(){
  PopUpHideSx();
}) 

function PopUpShowSx() {
  $(_id_('popUpSx')).show();
}

function PopUpHideSx() {
  $(_id_('popUpSx')).hide();
}


$(document).ready(function(){
  PopUpHideS();
}) 

function PopUpShowS() {
  $(_id_('popUpS')).show();
}

function PopUpHideS() {
  $(_id_('popUpS')).hide();
}


$(document).ready(function(){
  PopUpHideE()
}) 

function PopUpShowE() {
  $(_id_('popUpE')).show();
}

function PopUpHideE() {
  $(_id_('popUpE')).hide();
}