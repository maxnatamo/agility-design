$(document).ready(function() {
    function closableReact(){
        const par = $(this).parent();
        par.css({"opacity": 0});
        setTimeout(function() {
            par.css({"display": "none"});
        }, parseFloat( $(this).parent().css("transition-duration").replace('s','') ) * 1000);
    }

    $(".closable button[action='alert-close'].close").click( closableReact );
    $(".closable button[action='callout-close'].close").click( closableReact );
});

$(window).scroll({ previousTop: 0 }, function () {
    if ($(window).scrollTop() < this.previousTop) {
        $(".navigation-arrows").show();
    } else {
        $(".navigation-arrows").hide();
    }
    this.previousTop = $(window).scrollTop();
});