$(document).ready(function() {
	//menu選單
	$('.list > li > a').click(function(event) {
		/* Act on the event */
		$(this).parent().find('.product').slideToggle();
	});

	//圖片輪播
   $(window).on('load', function(){  
    	$('#slider').nivoSlider({
    		effect: 'fade',

    		pauseTime: 2000


    	}); 
  	});


   //top效果
   $('.top a').click(function(event) {
   	/* Act on the event */
   		event.preventDefault();
   		$('html,body').animate({scrollTop:0}, 1000);

   	
   });
});