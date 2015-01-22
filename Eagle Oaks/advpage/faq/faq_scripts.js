$(document).ready(function(){

/*COLLAPSIBLE FAQs*/
$(".regular_testimonials .wrap_testimonials .section_title h2").live("click", function() {

    var object = $(this).parent().parent(".wrap_testimonials");

    if ($(object).hasClass("open_testimonials")) {
        $(object).animate({
            height: 35 //height of .wrap_testimonials
        }, 1000, function() {
            $(object).removeClass("open_testimonials");
            $(object).find("h2 span").removeClass("open");
            $(object).find("h2 span").addClass("closed");
        });
    } else {
        var height = $(object).height() + 30 +  $(object).find(".testimonial_open").height(); //number here is margin on the bottom
        $(object).animate({
            height: height
        }, 1000, function() {
            $(object).addClass("open_testimonials");
            $(object).find("h2 span").removeClass("closed");
            $(object).find("h2 span").addClass("open");
        });
    }
});

});