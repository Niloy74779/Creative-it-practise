$(function() {
   
    
    // $('p').click(function(call){
    //     $(this).css({
    //         "background": "red",
    //         "padding": "30px" ,
    //         "font-size" :  "25px " 
    //     }); 
    
    // });

    var menu = $("#main_manu").offset().top;

//    alert(menu); 629

    $(Window).scroll(function(){
        var scroll =$(Window).scrollTop();
        if (scroll > menu) {
            $("#main_manu").addClass("menu_fix")
        }
        else{
            $("#main_manu").removeClass("menu_fix")
        }


        if (scroll > 1000) {
            $(".backTop").slideDown(100)
        } 
        else{
            $(".backTop").slideUp()
        }

        $(".backTop").click(function() {
            $('html, body').animate({
                scrollTop:0
            }, 1000);
        });

    });

   



    $(".hide").click(function(){
        $(".box").hide(1000);
    });

    $(".show").click(function(){
        $(".box").show(1000);
    });

    $(".all").click(function(){
        $(".box").stop().toggle(1000);
    });

    


    $(".fadehide").click(function(){
        $(".box").fadeOut(1000)
    });

    $(".fadeshow").click(function(){
        $(".box").fadeIn(1000);
    });

    $(".fadeall").click(function(){
        $(".box").stop().fadeToggle(1000);
    });



    $(".slidehide").click(function(){
        $(".box").slideUp(1000)
    });

    $(".slideshow").click(function(){
        $(".box").slideDown(1000);
    });

    $(".slideall").click(function(){
        $(".box").stop().slideToggle(1000);
    });
    

    $(".red").click(function(){
        $(".box").removeClass('blueColor greenColor')
        $(".box").addClass("redColor")
    });

    $(".green").click(function(){
        $(".box").removeClass('blueColor redColor')
        $(".box").addClass("greenColor")
    });

    $(".blue").click(function(){
        $(".box").removeClass('redColor greenColor')
        $(".box").addClass("blueColor")
    });


    $(".search").on("click", function(){
        $(".search_box").slideDown(1000)
    })

    $(".close").on("click", function(){
        $(".search_box").slideUp(1000)
    })





    $(window).on('load',function(){
        $('.praloder_main').delay(100).fadeOut(1000);
    });




});





