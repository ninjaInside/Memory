function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function adaptiveMenuBtn(target) {
	if ($(target).width() <= 1030) {

		$('.menu__btn').html('')

		$('.menu__btn').css('width', '80px')
		$('.menu__btn').css('height', '80px')
	
	} else if ($(target).width() >= 1030) {

		$('.menu__btn').html(getCookie('name'))

		$('.menu__btn').css('width', '')
		$('.menu__btn').css('height', '')
		$('.menu__btn').css('background', '')

	}
}

$(document).ready(() => {
	if (!getCookie('name')) {
		setCookie('name', $('.menu__btn').text())
	}

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
