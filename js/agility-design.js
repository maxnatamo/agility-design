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

    // Tooltips
    $("a[tooltip]").hover(function() {
        const top = $(this).position().top + 20;
        const left = $(this).position().left;
        const id = Math.random().toString(36).substring(5);

        $("body").append('<div class="tooltip tooltip-' + id + '" style="top: ' + top + 'px; left: ' + left + 'px"><strong>' + $(this).attr("message") + '</strong></div>');
        $(this).attr("tooltip", "tooltip-" + id );
        setTimeout(function() {
            $("div.tooltip-" + id).css("opacity", 0.9);
        }, 10);
    }, function() {
        const t = this;
        $("div." + $(this).attr("tooltip")).css("opacity", 0);

        setTimeout(function() {
            $("div." + $(t).attr("tooltip")).remove();
        }, parseFloat( $("div." + $(this).attr("tooltip")).css("transition-duration") ) * 1000);
    });
});