function setupNavbar() {
	const navbar = document.querySelector('.navbar');
	const navbarCollapse = document.getElementById('navbarNavDropdown');

	const updateNavbarOnScroll = () => {
		if (window.scrollY > 50 || navbarCollapse.classList.contains('show')) {
			navbar.classList.add('bg-dark', 'navbar-sticky');
		} else {
			navbar.classList.remove('bg-dark');
			navbar.classList.remove('navbar-sticky');
		}
	};

	// Handle opening the mobile menu
	navbarCollapse.addEventListener('show.bs.collapse', () => {
		navbar.classList.add('bg-dark', 'navbar-sticky');
	});

	// Handle closing the mobile menu
	navbarCollapse.addEventListener('hide.bs.collapse', () => {
		if (window.scrollY <= 50) {
			navbar.classList.remove('bg-dark');
			navbar.classList.remove('navbar-sticky');
		}
	});

	// Update navbar on scroll
	window.addEventListener('scroll', updateNavbarOnScroll);
}

// Swiper: Testimonials slider
new Swiper('.testimonials-slider', {
	speed: 600,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	slidesPerView: 'auto',
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});

// Swiper: Gallery slider
new Swiper('.gallery-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', setupNavbar);
