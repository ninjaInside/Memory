let currentUser;
	currentUser = $('.menu__btn').text()

function adaptiveMenuBtn(target) {
	if ($(target).width() <= 1030) {

		$('.menu__btn').html('')

		$('.menu__btn').css('width', '80px')
		$('.menu__btn').css('height', '80px')
	
	} else if ($(target).width() >= 1030) {

		$('.menu__btn').html(currentUser)

		$('.menu__btn').css('width', '')
		$('.menu__btn').css('height', '')
		$('.menu__btn').css('background', '')

	}
}

$(document).ready(() => {
	$('.menu__btn').click((e) => {
		if (!$(e.currentTarget).text()) {
			$(e.currentTarget).toggleClass('menu__btn_close')
		}

		$('.menu__list').toggleClass('menu__list_show')
	})
	
	adaptiveMenuBtn(window);

	$(window).resize((e) => {
		adaptiveMenuBtn(e.target)
	})
})
