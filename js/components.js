
//WHEN DOM IS READY
$(document).ready(function(){

});

//WHEN PAGE HAS LOADED
$(window).on('load', function(){
    purchaseOptions();
    tabs();
});

$(window).on('resize',function(){

})

$(window).on('scroll',function(){
    
});


// TABS ///////////////////////////
function tabs(){
    let tab = $('.tabs').find('.menu').find('li');
    let content = $('.tabs').find('.tab-content');
    let baseW = tab.last().outerWidth();

    tab.first().addClass('active');
    content.first().each(function(){
        $(this).show().removeClass('out');
    })

    tab.each(function(){
        let w = $(this).find('div').outerWidth();
        $(this).attr('data-width',w);
        if($(this).hasClass('active')){
            $(this).css('width',baseW + w);
        } else {
            $(this).css('width',baseW);
        }
    });

    tab.on('mouseenter', function(){
        if(!$(this).hasClass('active')){
            let w = parseInt($(this).attr('data-width'));
            $(this).css('width',baseW + w);
        }
    });

    tab.on('mouseleave', function(){
        if(!$(this).hasClass('active')){
            $(this).css('width',baseW);
        }
    });

    tab.on('click', function(){
        let w = parseInt($(this).attr('data-width'));
        let i = $(this).index();
        let content = $(this).parents('.tabs').find('.container').find('.tab-content');

        $(this).addClass('active').css('width',baseW + w);
        $(this).siblings().removeClass('active').css('width',baseW);
        
        content.addClass('out');

        setTimeout(function(){
            content.hide();
        },500);
        setTimeout(function(){
            content.eq(i).show()
        },550);
        setTimeout(function(){
            content.eq(i).removeClass('out');
        },600);
    });
}

function purchaseOptions(){
    let buy = $('.opts').find('.button.buy');

    buy.on('click',function(){
        if(!$(this).hasClass('active')){

            //ACTIVATE PLATFORM AND SWAP
            var that = $(this);
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            if(!$(this).is(':last-child')){
                $(this).siblings().css('pointer-events','none');
                $(this).addClass('out');
                setTimeout(function(){
                    that.appendTo(that.parent());
                },500);
                setTimeout(function(){
                    that.removeClass('out');
                },750);
                setTimeout(function(){
                    that.siblings().css('pointer-events','')
                },1250);
            }

            //LOAD CONTENT
            $(this).parents('.panel-left').siblings().children().removeClass('out');

            //ACTIVATE PURCHASE BUTTON
            var cart = $(this).parents('.panel-left').siblings().find('.purchase').find('.add');

            if(!$(this).is(':last-child')){
                cart.find('.button').addClass('inactive');
                setTimeout(function(){
                    cart.removeClass('out');
                    cart.find('.button').removeClass('inactive');
                },1000);
            } else {
                cart.removeClass('out');
            }

        }
    });
}




