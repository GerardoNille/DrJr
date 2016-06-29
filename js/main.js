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

function slide_Centros(centro,caller) {
	//$(caller).closest('#centro1').slideUp;
	$(caller).parent().parent().slideToggle();
    if ($('#' + centro).is(':visible')) {
        $("#" + centro).slideUp(1500);
        //$(".banner_servicio").removeClass("imagen_animacion");
    } else {
        //$(".banner_servicio").addClass("imagen_animacion");
        //slide_Check();
        $(".centro_expandido").not(centro).slideUp("1500");  
        $("#" + centro).slideDown(1500);
    }
}

function show_banner(banner,caller) {
	//$(caller).closest('#centro1').slideUp;
		$(caller).parent().parent().parent().slideToggle();
        $("#" + banner).slideToggle();
        //$(".banner_servicio").removeClass("imagen_animacion");
    
}