// PopUp Window scripts

open();
close();

let popUpAll = document.querySelectorAll('.popUp_window');

for (let elem of popUpAll) {
  $(elem).hide();
}

function open() {

	$(document).ready(function() {
		$('.info').click(function() {
			$($(this).data('elem')).show()
		})
	})

}

function close() {
	$(document).ready(function() {
		$('.popUp_hide').click(function() {
			$($(this).data('elem')).hide()
		})
	})
}



