$(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    
    var birdLogo = $('.bird-logo')
    var targetHeight = birdLogo.outerHeight();
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    birdLogo.css({'opacity': scrollPercent});

    var logoTop = $('.logoTop');
    logoTop.attr('src', './css/Media/logo_sm_dark.png');
    
    
    var menu = $('.menu');
    menu.addClass('sticky-header')
    if (scrollTop == 0){
        menu.removeClass('sticky-header');
        logoTop.attr('src', './css/Media/logo_sm.png');
    } 
})