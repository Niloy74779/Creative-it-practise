$(function(){
    
    $('#banner').slick({
        dots : true,
        dotsClass:'slider_dots',
        prevArrow: '<i class="fas fa-chevron-left lt_slider"></i>',
        nextArrow: '<i class="fas fa-chevron-right rt_slider"></i>',

    });

    $('.slider').slick({
        slidesToShow: 4,
        autoplay : true,
        autoplaySpeed: 1000,
        arrows : true,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
    });

//  veno box slider
    $('.venobox').venobox(); 

    // work header slide
    var mixer = mixitup('.filter_head');
    // work part
    $('.work_menu button').click(function(){
        
        $('.work_menu button').removeClass('active');
        $(this).addClass('active');
    });


    // wow js
    new WOW().init();

    // counter

    $('.counter').counterUp({
    delay: 10,
    time: 1000
});

})