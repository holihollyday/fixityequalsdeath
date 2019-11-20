$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});


	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 276
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});

//background
particlesJS("particles-js", {"particles":{
	"number":
	{"value":700,"density":{"enable":true,"value_area":2500}},
	"color":{"value":"#695a5a"},
	"shape":{"type":"circle","stroke":{"width":2,"color":"#E7E7E7"},
	"polygon":{"nb_sides":3},
	"image":{"src":"","width":100,"height":50}},
	"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":0,"opacity_min":0,"sync":true}},
	"size":{"value":0,"random":false,"anim":{"enable":false,"speed":0,"size_min":0,"sync":false}},
	"line_linked":{"enable":true,"distance":66.2432618182119,"color":"#ffffff","opacity":1,"width":0},
	"move":{"enable":true,"speed":6,"direction":"none",
	"random":false,"straight":false,"out_mode":"out",
	"bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
	"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
	"onclick":{"enable":true,"mode":"push"},"resize":true},
	"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
	"bubble":{"distance":1006.8550044888954,"size":125.85687556111192,
	"duration":6.712366696592635,"opacity":1,"speed":3},
	"repulse":{"distance":134.2473339318527,"duration":0.4},
	"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
	"retina_detect":true});
	var count_particles, stats, update;
	stats = new Stats; stats.setMode(0);
	stats.domElement.style.display="none";
	stats.domElement.style.position = 'relative';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function() {
		stats.begin(); stats.end();
		if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
			count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		}
		requestAnimationFrame(update);
	};
	requestAnimationFrame(update);;
