// PopUp Window scripts

open();
close();
openForm();

let defoltClientWidth;

window.onload = function() {
	defoltClientWidth = document.documentElement.clientWidth;
}

function cash(key, value=undefined) {

	if (value == undefined) {
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


let popUpAll = document.querySelectorAll('.popUp_window');

for (let elem of popUpAll) {
  $(elem).hide();
}

function open() {

	$(document).ready(function() {

		$('.info').click(function() {

			$($(this).data('elem')).show()
			document.body.style.overflow = "hidden";
			let clientWidthNow = document.documentElement.clientWidth;
  			let paddingFlame = clientWidthNow - defoltClientWidth;
  			_select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  			_select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  			document.body.paddingRight = `${paddingFlame}px`;

		})

	})

}

function close() {

	$(document).ready(function() {

		$('.popUp_hide').click(function() {

			$($(this).data('elem')).hide()
			document.body.style.overflow = "";
  			_select_(".nav_and_logo").style.paddingRight = "";
  			_select_(".main_block").style.paddingRight = "";
  			document.body.paddingRight = ""

		})

	})
	
}


function openForm() {

	$(document).ready(function() {

		$('.but__pay-to-resp').click(function() {

			$($(this).data('elem')).show()
			document.body.style.overflow = "hidden";
			let clientWidthNow = document.documentElement.clientWidth;
  			let paddingFlame = clientWidthNow - defoltClientWidth;
  			_select_(".nav_and_logo").style.paddingRight = `${paddingFlame}px`;
  			_select_(".header").style.paddingRight = `${paddingFlame}px`;
  			_select_(".main_block").style.paddingRight = `${paddingFlame}px`;
  			document.body.paddingRight = `${paddingFlame}px`;

		})

	})

}

