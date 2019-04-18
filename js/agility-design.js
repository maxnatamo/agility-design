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

    // Animation groups
    $("div.animation-group").children().each((i, v) => {
        // Only accept elements with a .animate-* class.
        if(~$(v).attr("class").indexOf("animate-")) {
            
            if(~$(v).attr("class").indexOf("animate-fade")) {
                $(v).css( "opacity", 1 );
            }

            if(~$(v).attr("class").indexOf("animate-fade-from-left")) { $(v).css( "right", "0em" ); }
            else if(~$(v).attr("class").indexOf("animate-fade-from-right"))  { $(v).css( "left",    "0em" ); }
            else if(~$(v).attr("class").indexOf("animate-fade-from-top"))    { $(v).css( "bottom",  "0em" ); }
            else if(~$(v).attr("class").indexOf("animate-fade-from-bottom")) { $(v).css( "top",     "0em" ); }
            
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