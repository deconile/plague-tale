

//WHEN DOM IS READY
$(document).ready(function(){
    loadNav();
    loadFooter();
    deactivateLinks();
});

//WHEN PAGE HAS LOADED
$(window).on('load', function(){
    setStickyBar();
    stickyBarCheck();
    revealNav();
    sceneAdjust();
    snapToSection();
    fireTextAnim();
    checkTextLoc();
});

//WHEN PAGE IS SCROLLED (ANY INSTANCE OF SCROLLING)
$(window).on('scroll',function(){
    snapToSection();
});

$(window).on('resize', function(){
    winDimensions();
}).resize();



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

    if(!$('nav').find('li').hasClass('active')){
        $('nav').find('li').first().addClass('active');
    }
}

//LOAD FOOTER
function loadFooter(){
    const footer = `
    <footer>
        <div class="limited content">
            <div class="logos">
                <div><img src="images/icons/focus-white.png" /></div>
                <div><img src="images/icons/asobo-white.png" /></div>
                <div><img src="images/icons/xbox-gamepass-white.png" /></div>
                <div><img src="images/icons/geforce-white.png" /></div>
                <div><img src="images/icons/corsair.png" /></div>
            </div>
            <div>
                <div>
                    <div class="divider">
                        <div><div></div></div>
                        <div class="label">Follow Us</div>
                        <div><div></div></div>
                    </div>
                </div>
                <div class="social">
                    <div class="soc"><a href=""><i class="fa-brands fa-facebook-f"></i></a></div>
                    <div class="soc"><a href=""><i class="fa-brands fa-instagram"></i></a></div>
                    <div class="soc"><a href=""><i class="fa-brands fa-twitter"></i></a></div>
                    <div class="soc"><a href=""><i class="fa-brands fa-youtube"></i></a></div>
                    <div class="soc"><a href=""><i class="fa-brands fa-twitch"></i></a></div>
                </div>
            </div>
            <div class="legal">&copy;2023 Focus Entertainment</div>
        </div>
    </footer>
    `

    $('body').append(footer);
}


// SCENE SIZING AND SNAPPING
var winH;
var winW;
var scenes = [];
var stories = [];
var scenesAmt;
var autoScrl = false;

// GET WINDOW DIMENSIONS
function winDimensions(){
    winH = $(window).height();
    winW = $(window).width();
}


// HIDE/REVEAL NAV BAR
var barTop;
var bp = false;
function setStickyBar(){
    if($('.buybar').length != 0){
        barTop = $('.buybar').offset().top;
    } else {
        barTop = winH;
    }
    
    if($(window).scrollTop() >= barTop - 50 && !bp){
        $('nav').addClass('hidden');
        $('.buybar').addClass('sticky');
        $('.buybar').removeClass('secondary');
        bp = true;
    } 
    if($(window).scrollTop() < barTop - 50 && bp){
        $('nav').removeClass('hidden');
        $('.buybar').removeClass('sticky');
        $('.buybar').addClass('secondary');
        bp = false;
    }
}

function stickyBarCheck(){
    $(window).on('scroll',function(){
        setStickyBar();
    });
}

function revealNav(){
    let cp,lp;
    $(window).on('scroll',function(){
        if(!autoScrl){
            cp = $(window).scrollTop();
            if(bp){
                if(cp < lp){
                    $('nav').removeClass('hidden');
                    $('.buybar').addClass('secondary');
                } else {
                    $('nav').addClass('hidden');
                    $('.buybar').removeClass('secondary');
                }
            }
            lp = cp;
        }
    });
}



// ADJUST SCENES ON RESIZE
function sceneAdjust(){
    scenesAmt = $('section').length;
    $(window).on('resize', function(){
        scenes = [];
        $('section').each(function(){
            let top = $(this).offset().top;
            scenes.push(top);
        });
        stories = []
        $('section.story').each(function(){
            let top = $(this).offset().top;
            stories.push(top);
        });
    }).resize();
}

//SCENE SNAP TO FUNCTION
function snapToSection(){
    
    if(!autoScrl){
        //$('html, body').stop();
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
            $('html, body').scrollTop(snapTo);
            setTimeout(function(){
                autoScrl = false;
            },1000);
        }, 1000));
    }
         
}

//ACTIVATE SECTION TEXT ANIMATIONS
function checkTextLoc(){
    $(window).on('scroll',function(){
        fireTextAnim();
    });
}

function fireTextAnim(){
    let text = $('.story').find('.text-lockup');
    if(text.hasClass('out')){
        for(a = 0; a < stories.length; a++){
            if($(window).scrollTop() >= (stories[a] - 100)){
                console.log(stories[a]);
                console.log(a);
                if(stories[a] === 0){
                    setTimeout(function(){
                        text.first().removeClass('out');
                    },1000);
                } else {
                    text.eq(a).removeClass('out');
                }
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



