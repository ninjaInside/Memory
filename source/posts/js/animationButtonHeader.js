let animBlock = document.querySelector('.anim_block');
let animationElem = document.querySelector('.anim_elem__anim_block');

class Anim {
	handleEvent(event) {
		let mouseReact = 'on' + event.type[0].toUpperCase() + event.type.slice(1); 
		this[mouseReact](event);
	}

	onMouseover() {
		animationElem.classList.add('anim-button-resp');
	}

	onMouseout() {
		animationElem.classList.remove('anim-button-resp');
	}
}

let anim = new Anim;

animBlock.addEventListener('mouseover', anim);
animBlock.addEventListener('mouseout', anim)