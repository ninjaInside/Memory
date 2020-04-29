// PopUp Window scripts


var defoltClientWidth;

window.onload = function() {
	defoltClientWidth = document.documentElement.clientWidth;
}

function cash(key, value) {

	if (value == null) {
		return cash[key];
	}

	cash[key] = value;

}

function _select_(select) {

	if (!cash(select)) {
		cash(select, document.querySelector(select));
	}

	return cash(select);

}


var popUpAll = document.querySelectorAll('.popUp_window');

for (var elem = 0; elem <= popUpAll.length; elem++) {
  $(elem).hide();
}

$(document).ready(function() {

	$('.info').click(function(e) {
			
		e.preventDefault();
		$($(this).data('elem')).css('display', 'flex');
		document.body.style.overflow = "hidden";
		var clientWidthNow = document.documentElement.clientWidth;
  		var paddingFlame = clientWidthNow - defoltClientWidth;
  		_select_(".nav_and_logo").style.paddingRight = paddingFlame + 'px';
  		_select_(".main_block").style.paddingRight = paddingFlame + 'px';
  		document.body.paddingRight = paddingFlame + 'px';

	})

	$('.popUp_hide').click(function() {
	
		$($(this).data('elem')).css('display', 'none')
		document.body.style.overflow = "";
  		_select_(".nav_and_logo").style.paddingRight = "";
  		_select_(".main_block").style.paddingRight = "";
  		document.body.paddingRight = ""

	})

	// $('.nav_and_logo__presentation-btn').click((e) => {

	// 	window.open('https://www.google.ru/intl/ru/slides/about/', 'Presentation', 'scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no') 

	// }) 

})

	


