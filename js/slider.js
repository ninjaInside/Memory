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

let x = 0;

let slider = setTimeout(function slide() {

  if (x === -1500) {
    x = 500;
    _id_('pic').style.left = x + 'px';
  }

  x += -500;

   _id_('pic').style.left = x + 'px';

  slider = setTimeout(slide, 2000);

}, 2000);