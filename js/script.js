$(document).ready(function () {
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}

		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass('show');
		} else {
			$('.scroll-up-btn').removeClass('show');
		}
	});

	// slide-up script
	$('.scroll-up-btn').click(function () {
		$('html').animate({ scrollTop: 0 });
		// removing smooth scroll on slide-up button click
		$('html').css('scrollBehavior', 'auto');
	});

	$('.navbar .menu li a').click(function () {
		// applying again smooth scroll on menu items click
		$('html').css('scrollBehavior', 'smooth');
	});

	// toggle menu/navbar script
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
	});

	// typing text animation script
	var typed = new Typed('.typing', {
		strings: [
			'Web developer',
			'Frontend developer',
			'Html',
			'Css',
		],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});

	var typed = new Typed('.typing-2', {
		strings: [
			'Web developer',
			'Fronted developer',
			'Html',
			'Css',
		],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});
	var typed = new Typed('.typing-3', {
		strings: [
			'Web developer',
			'Fronted developer',
			'Html',
			'Css',
		],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});

	// owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
				nav: false,
			},
		},
	});

	//text rotating animation
	var entries = [
		{ label: 'HTML5' },
		{ label: 'CSS3' },
		{ label: 'JAVASCRIPT' },
		{ label: 'NODE JS' },
		{ label: 'EXPRESS JS' },
		{ label: 'GIT' },
		{ label: 'GITHUB' },
		{ label: 'VS CODE' },
		{ label: '      ' },
		{ label: 'React js' },
		{ label: 'MONGO DB' },
		{ label: 'NPM' },
		{ label: 'BEM' },
		{ label: 'ES6' },
		{ label: 'NETLIFY' },
		{ label: 'HEROKU' },
		{ label: 'Python' },
	];

	var settings = {
		entries: entries,
		width: '100%',
		height: '100%',
		radius: '70%',
		radiusMin: 75,
		bgDraw: true,
		bgColor: 'transparent',
		opacityOver: 1.0,
		opacityOut: 0.05,
		opacitySpeed: 6,
		fov: 1,
		speed: 0.5,
		fontFamily: 'Courier,Arial,sansSerif',
		fontSize: '32',
		fontColor: '#ff0b56',
		fontWeight: 'bold',
		fontStyle: 'normal',
		fontStretch: 'normal',
	};

	$('#tag').svg3DTagCloud(settings);
});