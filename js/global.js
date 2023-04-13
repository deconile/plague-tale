

//WHEN DOM IS READY
$(document).ready(function(){
    loadNav();
    deactivateLinks();
});

//WHEN PAGE HAS LOADED
$(window).on('load', function(){
    sceneAdjust();
    snapToSection();
    fireTextAnim();
    checkTextLoc();
});


//LOAD NAVIGATION
function loadNav(){
    $('body').prepend(`<nav></nav>`);
    $('nav').prepend(`<div class="logo"><img src="images/icons/focus-white.png" /></div>`);
    $('nav').append(`<ul></ul>`);
    $('nav').append(`<div class="login">Log In</div>`);

    let nav = ['Home','Tale','Buy Now','Community'];
    let urls = ['index.html','tale.html','buy-now.html','community.html'];
    let loc = window.location.href.split('/');
    loc = loc[loc.length - 1];

    for(n = 0; n < nav.length; n++){
        let temp = `<li><a href="${urls[n]}">${nav[n]}</a></li>`
        $('nav').find('ul').append(temp);
        if(loc === urls[n]){
            $('nav').find('li').eq(n).addClass('active');
        }
    }
}


// SCENE SIZING AND SNAPPING
var winH;
var scenes = [];
var scenesAmt;
var autoScrl = false;


// ADJUST SCENES ON RESIZE
function sceneAdjust(){
    winH = $(window).height();
    scenesAmt = $('section').length;

    $(window).on('resize', function(){
        winH = $(window).height();
        scenes = [];
        for(s = 0; s < scenesAmt; s++){
            scenes.push(winH * s);
        }
    }).resize();
}

//SCENE SNAP TO FUNCTION
function snapToSection(){
    $(window).on('scroll',function() {
        if(!autoScrl){
            $('html, body').stop();
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function(){
                autoScrl = true;
                let snapTo;
                let win = $(window).scrollTop();
                for(s = 0; s < scenes.length; s++){
                    if(win >= (scenes[s] - 200) && win <= (scenes[s] + 200)){
                        snapTo = scenes[s];
                    }
                }
                $('html, body').animate({
                    scrollTop: snapTo
                },500);
                setTimeout(function(){
                    autoScrl = false;
                },1000)
            }, 1000));
        }
        
    }); 
}

//ACTIVATE SECTION TEXT ANIMATIONS
function checkTextLoc(){
    $(window).on('scroll',function(){
        fireTextAnim();
    });
}

function fireTextAnim(){
    let text = $('.text-lockup');
    if(text.hasClass('out')){
        for(a = 0; a < scenes.length - 1; a++){
            if($(window).scrollTop() >= (scenes[a + 1] - 100)){
                text.eq(a).removeClass('out');
            }
        }
    }
}



//DEACTIVATE BLANK LINKS
function deactivateLinks(){
    $('a').each(function(){
        if($(this).attr('href') === ''){
            $(this).attr('href', 'javascript:void(0)')
        }
    });
}



