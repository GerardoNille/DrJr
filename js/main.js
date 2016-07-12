
var $window = $(window);

function slide_Centros(centro, caller) {
    //$(caller).closest('#centro1').slideUp;
    $(caller).parent().parent().toggleClass("faa-horizontal animated faa-fast");
    setTimeout(function() {
        $(caller).parent().parent().toggleClass("faa-horizontal animated faa-fast");
        $(caller).parent().parent().slideToggle();
        if ($('#' + centro).is(':visible')) {
            $("#" + centro).hide(1500);
            //$(".banner_servicio").removeClass("imagen_animacion");
        } else {
            //$(".banner_servicio").addClass("imagen_animacion");
            //slide_Check();
            $(".centro_expandido").not(centro).slideUp("1500");
            $("#" + centro).slideDown(1500);
        }
    }, 500);
    /*$(caller).parent().parent().delay(5000).queue(function(){
  $(caller).parent().parent().toggleClass("faa-bounce animated");
});*/


    /*$(caller).parent().parent().slideToggle();
    if ($('#' + centro).is(':visible')) {
        $("#" + centro).slideUp(1500);
        //$(".banner_servicio").removeClass("imagen_animacion");
    } else {
        //$(".banner_servicio").addClass("imagen_animacion");
        //slide_Check();
        $(".centro_expandido").not(centro).slideUp("1500");
        $("#" + centro).slideDown(1500);
    }*/
}

function show_banner(banner, caller) {
    //$(caller).closest('#centro1').slideUp;
    $(caller).parent().parent().parent().slideToggle();
    $(caller).parent().parent().parent().toggleClass("faa-passing animated faa-fast");
    $(caller).parent().parent().parent().toggleClass("faa-passing-reverse animated faa-fast");
    $("#" + banner).slideToggle();
    //$(".banner_servicio").removeClass("imagen_animacion");
}

function slide_section(section) {
    $("#" + section).slideToggle();
}
/*Variables*/
$(document).ready(function() {
    init_map();
    $('.videos').height($('.memorias img').height() * .7);
    $('.h_ribbon').height($('.memorias img').height() * .7);
    $('.col2-md').height($('.memorias').height() + $('.videos').height()+6);
    $('.memorias .title').click(function() {
        $('.memorias_container').toggle();
    });
    $('.videos .title').click(function() {
        $('.videos_container').toggle();
            $('.iframe_video').height($('.iframe_video').width() * .5625)
    });
       
    $window.on('scroll', check_if_in_view);
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});
$(window).resize(function() {
    $('.iframe_video').height($('.iframe_video').width() * .5625)
    $('.video').height($('.memorias img').height() * .7);
    $('.h_ribbon').height($('.memorias img').height() * .7);
    $('.col2-md').height($('.memorias').height() + $('.videos').height()+6);
});