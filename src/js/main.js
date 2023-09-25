if (document.querySelector(".main-page-swiper")) {
	const swiper = new Swiper(".main-page-swiper", {
		navigation: {
			nextEl: ".main-page-swiper .swiper-button-next",
			prevEl: ".main-page-swiper .swiper-button-prev",
		},
	});
}

if (document.querySelector(".main-page-news")) {
	let swiper;

	function initSwiper() {
		swiper = new Swiper(".swiper-main-page-news-swiper", {
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
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},
		});
	}

	initSwiper();

	if (window.innerWidth <= 1024) {
		swiper && swiper.destroy(false, true);
	} else {
		initSwiper();
	}
	window.addEventListener("resize", (e) => {
		if (window.innerWidth <= 1024) {
			swiper && swiper.destroy(false, true);
		} else {
			initSwiper();
		}
	});
}

const burger = document.querySelector(".burger");
const header = document.querySelector("header");
burger &&
	burger.addEventListener("click", (e) => {
		header.classList.toggle("active");
	});
