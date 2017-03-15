$(function() {
	//declaration and initialization of the variables
	var carousel = $("#carousel");
	var carouselList = carousel.find("ul.photo");
	var carouselMenu = carousel.find("ul.menu");
	//adding <li> elements depending on the number of photos
	carouselList.find("li").each(function() {
		carouselMenu.append("<li></li>");
	});

	var menuOption = carouselMenu.find("li");
	//adding class onload
	menuOption.first().addClass("active");
	//ater click function
	menuOption.click(function() {
		if( !$(this).hasClass("active") ) {
			target = $(this).index();
			moveSliderTo(target);
		}
	});
	//prev and next buttons
	$(".carousel-nav").find(".prev").click(function() {
		target = menuOption.siblings(".active").index();
		target == 0 ? target = menuOption.length - 2 : target -= 1;
        moveSliderTo(target);
	})

	$(".carousel-nav").find(".next").click(function() {
		target = menuOption.siblings(".active").index();
		target == menuOption.length - 2 ? target = 0 : target += 1;
		moveSliderTo(target);
	})
	//automoving
	function autoChangeSlide() {
		target = menuOption.siblings(".active").index();
        target == menuOption.length - 2 ? target = 0 : target += 1;
        moveSliderTo(target);
	}
	//moving to the selected slide
	function moveSliderTo(target) {
		carouselList.stop().animate({"left": -410 * target});
        menuOption.removeClass("active").eq(target).addClass("active");
        resetInterval();
	}
	//setting interval
	var autoMove = setInterval(function(){autoChangeSlide();}, 3000);
	//reseting interval
	function resetInterval() {
		clearInterval(autoMove);
		autoMove = setInterval(function(){autoChangeSlide();}, 3000);
	}
});