$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = $('.logo').outerHeight();
		 if ($(window).scrollTop() > navHeight) {
			 $('nav').addClass('fixed');
		 }
		 else {
			 $('nav').removeClass('fixed');
		 }

	});
});

$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});


$("nav ul li a").click(function(e) { 
  e.preventDefault(); 
	console.log($(this).attr("href").replace("#", ""));
 goToByScroll($(this).attr("href").replace("#", ""));           
});

function goToByScroll(id){
	console.log(id);
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top + 200},
        'slow');
}