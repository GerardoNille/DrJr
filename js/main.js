/*Variables*/
$(document).ready(function() {
	init_map();
	$('.video').height($('.memorias img').height()*.7);
	$('.h_ribbon').height($('.memorias img').height()*.7);
	$('.menciones').height($('.memorias img').height()+$('.h_ribbon').height()+6);
});
$(window).resize( function () {
	$('.video').height($('.memorias img').height()*.7);
	$('.h_ribbon').height($('.memorias img').height()*.7);
	$('.menciones').height($('.memorias img').height()+$('.h_ribbon').height()+6);
});
