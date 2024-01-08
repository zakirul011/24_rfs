(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


	/*=========================
	product-slider
	===========================*/
	$('.product-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	/*=========================
	product-h-slider
	===========================*/
	$('.product-h-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
		centerMode: true,
		centerPadding: '28%',

		responsive: [{
				breakpoint: 1200,
				settings: {
					centerPadding: '20%',
				}
			},
			{
				breakpoint: 991,
				settings: {
					centerPadding: '15%',
				}
			},
			{
				breakpoint: 767,
				settings: {
					centerPadding: '10%',
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerPadding: '0',
				}
			}
		]
	});
	
	/*=========================
	detail-slider
	===========================*/
	$('.detail-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	popu-product-slider
	===========================*/
	$('.popu-product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
	/*=========================
	ins-gallery-slider
	===========================*/
	$('.ins-gallery-slider').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});

	/*=========================
	tesimony-slider
	===========================*/
	$('.tesimony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
	});

	/*=========================
	promo-slider
	===========================*/
	$('.promo-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
	});

	/*=========================
	brand-slider
	===========================*/
	$('.brand-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
	});


	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$('.pop-img-btn').magnificPopup({
		type: 'image'
	});
	$('.gallery-item a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
	$('.ins-gallery-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});

	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});

	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


	// GALLERY AREA
	var galleryWrap = $('.gallery-wrap')
	if(window.matchMedia("(max-width: 767px)").matches){
		galleryWrap.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
		});
	} else{
		galleryWrap.imagesLoaded( function() { 
			galleryWrap.masonry({
				columnWidth: '.gallery-sizer',
				itemSelector: '.gallery-item',
			});
		});
	}
	

	// niceSelect
	$('select').niceSelect();

	// custom tab
	tabFunc(document.querySelectorAll('.category-link li'), document.querySelectorAll('.category-tab'))
	tabFunc(document.querySelectorAll('.popu-product-link li'), document.querySelectorAll('.popu-product-tab'))

	function tabFunc(tabLinks, tabs) {
		tabLinks.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < tabLinks.length; i++) {
					tabLinks[i].classList.remove('active')
					tabs[i].classList.remove('active')
				}
				link.classList.add('active')
				tabs[index].classList.add('active')
			})
		});
	}

	const faqWrap = document.querySelectorAll('.faq-box-wrap')
	faqWrap.forEach(wrap => {
		let faqBox = wrap.querySelectorAll('.faq-box')
		faqBox.forEach(bx => {
			let title = bx.querySelector('.faq-box-title')
			let body = bx.querySelector('.faq-box-body')
			if (bx.classList.contains('active')) {
				body.style.maxHeight = body.scrollHeight + 'px'
			}
			title.addEventListener('click', ()=>{
				if (bx.classList.contains('active')) {
					bx.classList.remove('active')
					body.style.maxHeight = null;
				}else{
					for (let i = 0; i < faqBox.length; i++) {
						faqBox[i].classList.remove('active')
						faqBox[i].querySelector('.faq-box-body').style.maxHeight = null;
					}
					bx.classList.add('active')
					body.style.maxHeight = body.scrollHeight + 'px';
				}
			})
		});
	});

	galleryWrap.imagesLoaded( function() { 
		// skrollr activation
		var s = skrollr.init();
		if (s.isMobile()) {
				s.destroy();
		}
	});
})(jQuery);