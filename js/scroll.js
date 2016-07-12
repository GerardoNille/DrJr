var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    //console.log("funciooon  ");
   // alert("entré a función");
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   // alert  ($animation_elements)
        //alert("Entré a la función each");
        var element_height = $element.outerHeight(false);
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        var resta = Math.abs((element_top_position - window_bottom_position));
        var resta2 = Math.abs((element_bottom_position - window_top_position));

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            //alert("in-line");
            $element.display = "inline";
            el = $element.child();
            newone = el.clone(true),
                el.before(newone);

        } else if (Math.abs((element_top_position - window_bottom_position)) <= 40 || Math.abs((element_bottom_position - window_top_position)) <= 40) {
            //alert("clone");
            

            var count = $('.contenedor' + el.attr("id")).length;

            if (count > 1) {

                $(".contenedor" + el.attr("id") + ":last").remove();
            }
        }
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
