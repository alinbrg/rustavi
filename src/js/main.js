if (document.querySelector(".main-page-swiper")) {
	const swiper = new Swiper(".main-page-swiper", {
		navigation: {
			nextEl: ".main-page-swiper .swiper-button-next",
			prevEl: ".main-page-swiper .swiper-button-prev",
		},
	});
}

if (document.querySelector(".main-page-news")) {
	const swiper = new Swiper(".swiper-main-page-news-swiper", {
		navigation: {
			nextEl: ".main-page-news .swiper-button-next",
			prevEl: ".main-page-news .swiper-button-prev",
		},
		slidesPerView: 4,
		spaceBetween: 16,
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 16,
			},
		},
	});

	if (window.innerWidth <= 1024) {
		swiper.destroy(false, true);
		console.log(swiper);
	}
	window.addEventListener("resize", (e) => {
		console.log(window.innerWidth);
		if (window.innerWidth <= 1024) {
			swiper.destroy(false, true);
		}
	});
}
