$(document).ready(function($) {
    $("#menu-icon").on("click", function() {
        $("#nav").slideToggle();
        $(this).toggleClass("active");
    });

    //nav
    $(function(){
        $(".nav-s").hover(function() {
            $(this).attr("src","../images/navigation/streams-of-thought-l.svg");
                }, function() {
            $(this).attr("src","../images/navigation/streams-of-thought.svg");
        });
        $(".nav-l").hover(function() {
            $(this).attr("src","../images/navigation/life-l.svg");
                }, function() {
            $(this).attr("src","../images/navigation/life.svg");
        });
        $(".nav-c").hover(function() {
            $(this).attr("src","../images/navigation/contact-l.svg");
                }, function() {
            $(this).attr("src","../images/navigation/contact.svg");
        });
    });

});

/* links redirect handler */
$(".nav-l").click(function() {
    var docHeight = $(document).height();
    $("body").append("<div id='overlay'></div>");
    $("#overlay")
        .height(docHeight)
        .css({
            'opacity' : 1,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'background-color': 'white',
            'width': '100%',
            'z-index': 5000,
            '-webkit-transition': 'all 1s ease',
            '-moz-transition': 'all 1s ease',
            '-ms-transition': 'all 1s ease',
            '-o-transition': 'all 1s ease',
            'transition': 'all 1s ease'
    });
    $("#pofw-logo")
        .css({
            'z-index': 6000,
            '-webkit-transition': 'opacity 1s ease-in',
            '-moz-transition': 'opacity 1s ease-in',
            '-ms-transition': 'opacity 1s ease-in',
            '-o-transition': 'opacity 1s ease-in',
            'transition': 'opacity 1s ease-in',
            'opacity': 1
    });
    setTimeout(function(){
    	$("#pofw-logo")
        .css({
            'opacity': 0
    	});
    	$( "#overlay" ).remove();
    },5000);
});