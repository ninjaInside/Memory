let currentUser;
	currentUser = $('.menu__btn').text()

$(document).ready(() => {

	$('.menu__btn').click((e) => {
		$(e.currentTarget).children('img').toggleClass('menu__btn_close')

		$('.menu__list').toggleClass('menu__list_show')
	})
	
	adaptiveMenuBtn(window);

	$(window).resize((e) => {
		adaptiveMenuBtn(e.target)
	})
})


function adaptiveMenuBtn(target) {
	if ($(target).width() <= 1030) {

		$('.menu__btn').html('<img src="#" alt="">')
	
	} else if ($(target).width() >= 1030) {

		$('.menu__btn').html(currentUser)

	}
}