//side menu
document.querySelector('.hamburger-menu').addEventListener('click', () => {
	document.querySelector('.container').classList.toggle('change');
});
//smooth scroll to sction
let menuLinks = document.querySelectorAll('.menu .menu-link');
menuLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior: 'smooth'
		});
	});
});
//scroll to top button
let totopBtn = document.querySelector('.scroll-btn');
window.addEventListener('scroll', () => {
	totopBtn.classList.toggle('show', window.scrollY > 300);
});

totopBtn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('.header').scrollIntoView({
		behavior: 'smooth'
	});
});
//owl carousal
$('.owl-carousel').owlCarousel({
	autoplay: true,
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
});
