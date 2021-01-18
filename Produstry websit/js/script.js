$(function(){

    // manu part js
    
    $('.nav_icon').click(function(){
        $('#mynav a').fadeToggle(500);
        $(this).find("i").toggleClass('fa-bars fa-times');
    });

    $('.nav_icon').click(function(){
        $('.navbar-brand').toggleClass('logo_move');
    });

    

    // service slick slider

    $('.service_slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        arrows: false,
        dots:false,
    });


    // service slick slider

    $('.portfolio_content').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1, 
        arrows: false,
        dots:false, 
    });

    
    // Blog slick slider

    $('.blog_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        dots:false,
        nextArrow:$('.blogicon_left'),
        prevArrow:$('.blogicon_right'),
    });

    // Counter js
    $('.counter_number').counterUp({
		time: 3000
	});


    



















    // pogo slider

    $('#banner').pogoSlider({
        autoplay: true,
        autoplayTimeout: 5000,
        displayProgess: true,
        preserveTargetSize: true,
        targetWidth: 1000,
        targetHeight: 450,
        responsive: true,
        generateNav: false,
      }).data('plugin_pogoSlider');

    

     

   









});