$(document).ready(function() {
    // Closable alerts.
    function closableReact(){
        const par = $(this).parent();
        par.css({"opacity": 0});
        setTimeout(function() {
            par.css({"display": "none"});
        }, parseFloat( $(this).parent().css("transition-duration").replace('s','') ) * 1000);
    }

    $(".closable button[action='alert-close'].close").click( closableReact );
    $(".closable button[action='callout-close'].close").click( closableReact );

    // Animations
    $("div[class *= 'animate-fade']").css( "opacity", 1 );
    $("div[class *= 'animate-fade-from-left']").css(   "right",  0 );
    $("div[class *= 'animate-fade-from-top']").css(    "bottom", 0 );
    $("div[class *= 'animate-fade-from-right']").css(  "left",   0 );
    $("div[class *= 'animate-fade-from-bottom']").css( "top",    0 );

    // Animation groups
    $("div.animation-group").children().each((i, v) => {
        // Only accept elements with a .animate-* class.
        if(~$(v).attr("class").indexOf("animate-")) {
            $(v).css({
                "transition-delay":
                ( parseFloat( $(v).parent().attr("data-delay-initial") )
                + parseFloat( $(v).parent().attr("data-delay-incremental") ) * i )
                + "s"
            });
        }
    });
});

$(window).scroll({ previousTop: 0 }, function () {
    if ($(window).scrollTop() < this.previousTop) {
        $(".navigation-arrows").show();
    } else {
        $(".navigation-arrows").hide();
    }
    this.previousTop = $(window).scrollTop();
});