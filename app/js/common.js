$(document).ready(function(){
    $('.btn_mnu').click(function (e) { 
        $('.nav').fadeIn();
    });
    $('.close-menu').click(function (e) { 
        $('.nav').fadeOut(('400'),function(){
            $(this).removeAttr('style');
        }
        );
    });


    /*Плавная прокрутка*/
    $(".scroll-down, .nav__item a, .nav__action").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 800,
           easing: "swing"
        });
        return false;
     });

     /*Команда*/
     $('.worker__name').click(function (e) { 
         $('.worker').removeClass('worker--active');
         $(this).parents('.worker').addClass('worker--active');
     });
     
     /*Меню*/
     $('.vertical-positioner').click(function (e) { 
         $('.menu__item').removeClass('menu__item--active');
         $(this).parents('.menu__item').addClass('menu__item--active');
     });

     /*Состав*/
     $('.info-trigger').click(function (e) { 
         e.preventDefault();
         $(this).next('.composition').slideToggle('fast');
     });

     /*Слайдер*/
     $('#slider').slick();

     /*Скрол*/
     $('.maincontent').fullpage({
         navigation: false,
         verticalCentered: false,
         autoScrolling: false,
         menu: '.live-scroll',
		 anchors:['firstPage', 'secondPage','3rdPage','4rdPage','5rdPage','6rdPage','7rdPage','8rdPage']
     });

});

