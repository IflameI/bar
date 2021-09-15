let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}


// Вызов модального окна
$('.pl').click( function() {
	$('.overlay').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay').fadeOut();
});


$('.pl2').click( function() {
	$('.overlay2').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup2').click( function() {
	$('.overlay2').fadeOut();
});


