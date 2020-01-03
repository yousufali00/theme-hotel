(function ($){
"use strict";

/*=================================
            Preloader
=================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});
/*=================================
    Animation 
=================================*/
$(function(){
    new WOW().init();
});

$(window).on('load', function () {
    
    $(".banner-title").addClass("animated fadeInUp");
});    
/*=================================
           Navigation
=================================*/

$(function(){
    
    showhide();
    
    $(window).scroll(function(){
        
    showhide();
    
    });
    
    function showhide() {
      
        if ( $(window).scrollTop() > 90 ){
            $('nav.header').addClass('slide-header-bg');   
        }
        else{
        
            $('nav.header').removeClass('slide-header-bg');
            
        }
    }
    
});

/*=================================
        Banner slider
=================================*/
var swiper = new Swiper('.swiper-container', {
    
    spaceBetween: 30,
    effect: 'fade',
    loop: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: 'false',
        waitForTransition: 'true',
    },
});
/*=================================
        Feature
=================================*/
$('.feature-top-left , .feature-bottom-right').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

/*=================================
        About Page 
        about
=================================*/
    
$('.about-right-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
/*=================================
        Review
=================================*/
$('.review-content').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    nav:true,
    navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
$('.package-wrapper').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    
})

/*=================================
        Counterup
=================================*/
$(function(){
    $('.counter').counterUp({
    delay: 25,
    time: 3000
    });

});
    

/*=================================
        Wow Js
=================================*/



/*=================================
            Venobox
=================================*/
$(document).ready(function(){
    $('.venobox').venobox(); 
  });

/*=================================
    smooth scrolling of navs
=================================*/
$(function(){
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        var section_id= $(this).attr("href");
        
        $("html, body").animate({
            
            scrollTop: $(section_id).offset().top 
            
        }, 1250, "easeOutExpo");
    });
    
});

/*=================================
            Type JS
=================================*/
var typed = new Typed(".banner-caption", {
    strings: [" We're Here To Help You Enjoy Your Stay",
            "Will give You Good Quality",
            "Luxury Resort & Hotel"],
    typeSpeed: 60,
    backSpeed: 20,
    loop: true,
    showCursor: false,
});


 }) (jQuery);





















