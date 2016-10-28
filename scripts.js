$(document).ready(function(){
 
 //tooltips
	$(function () {
   		$('#item1').tooltip();
 	});	


	$(function () {
    	$('[data-toggle="tool-tip"]').tooltip();
 	});

	//smooth scrolling
	var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });


    //stellar
    $('.body').stellar();


    //textarea bg
    $("#message").css("background-color", "red");

    $("#button-message").on("click", function() {
  		var comment = $('#message').val();
  		$('#visible-comment').html(comment);
  		$('#message').hide();

  	return false;
});


});