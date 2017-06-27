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

    var pContainerHeight = $('.bird-box').height();
    if (scrollTop <= pContainerHeight){
        $('.title').css({
            'transform' : 'translate(0px, '+ scrollTop /3 +'%)'
        }); 
    }
    
})

var msgBtn = document.getElementById('btn');
var inputName = document.getElementById('input-name');
var inputEmail = document.getElementById('input-email');
var inputMessage = document.getElementById('input-message');

function validateInputs (inputName,inputEmail,inputMessage){
    if (inputName.value == '' || inputEmail.value == '' || inputMessage.value == ''){
        console.log('OPA')
    }
}

msgBtn.addEventListener('click', function(){
    validateInputs(inputName,inputEmail,inputMessage);
    //console.log(inputMessage.value)
});

