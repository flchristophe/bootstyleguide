 $(document).bind('keyup', function(e) {
        if(e.which == 39){
            $('.carousel').carousel('next');
        }
        else if(e.which == 37){
            $('.carousel').carousel('prev');
        }
    });
function goFullscreen(id) {
	var element = document.getElementById(id);
	if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
}

$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});​