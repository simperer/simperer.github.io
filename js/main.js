function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}
	else {
		window.onload = function () {
			oldonload();
			func();
		};
	}
}

addLoadEvent(toTopSpan);
addLoadEvent(imgSlider);

window.onscroll = function () {
	var navbarEle = document.getElementById("navbar");
	var toTopEle = document.getElementById("toTop");
	var navbarOffset = navbarEle.offsetTop;
	var parentOffset = navbarEle.offsetParent;
	if (parentOffset !== null) {
		navbarOffset += parentOffset.offsetTop;
		parentOffset = parentOffset.offsetParent;
	}
	var navbarScroll = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
	if (navbarScroll - navbarOffset > 30) {
		navbarEle.className = "fixed";
	} else {
		navbarEle.className = "";
	}
	if (navbarScroll > 1000) {
		toTopEle.style.visibility = "visible";
		toTopEle.style.pointerEvents = "auto";
	} else {
		toTopEle.style.visibility = "hidden";
		toTopEle.style.pointerEvents = "none";
	}
};

function toTopSpan() {
	var toTopF = document.getElementById("toTop");
	toTopF.onclick = function () {
		window.scrollTo(0, 0);
	};
}

function imgSlider() {
	var slides = document.getElementsByClassName("slides");
	var maskWidth = 648;
	Array.prototype.forEach.call(slides, function (el, i) {
		el.style.left = (i * maskWidth) + "px";
	});

	window.preNext = function (x) {
		var widthCounter = maskWidth;
		if ((x == 'imgnext' && (parseInt(slides[0].style.left) + maskWidth * (slides.length - 1) > 0)) || (x == 'imgpre' && (parseInt(slides[0].style.left) < 0))) {
			var slideWithdraw = setInterval(function () {
				var moveSpeed = 4;
				Array.prototype.forEach.call(slides, function (el, i) {
					if (widthCounter <= 0) {
						clearInterval(slideWithdraw);
					} else {
						el.style.left = (x == 'imgnext') ? (parseInt(el.style.left) - moveSpeed) + "px" : (parseInt(el.style.left) + moveSpeed) + "px";
					}
				});
				widthCounter -= moveSpeed;
			}, 1);
		}
	};
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}
	else {
		window.onload = function () {
			oldonload();
			func();
		};
	}
}