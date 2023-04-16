
//WHEN DOM IS READY
$(document).ready(function(){
    setPagination();
    setCarouselDistances();
});

//WHEN PAGE HAS LOADED
$(window).on('load', function(){
    paginationControls();
});

$(window).on('resize',function(){
    setCarouselDistances();
    triggerInitLabelLoad();
})

$(window).on('scroll',function(){
    triggerInitLabelLoad();
});




//IMAGE CAROUSEL
function setPagination(){
    $('.pagination').each(function(){
        let amt = $(this).parents('.carousel').find('.container').children().length;
        for(b = 0; b < amt; b++){
            $(this).find('.pag-bubbles').append(`<div></div>`);
        }
        $(this).attr('data-pages',amt - 1);
        $(this).find('.pag-bubbles').find('div').first().addClass('active');
        $(this).find('.pag-bubbles').find('div').eq(1).addClass('jux');
    });
}

function setCarouselDistances(){
    $('.carousel').each(function(){
        let w = $(this).find('.container').children().first().outerWidth();
        let gap = parseInt($(this).find('.container').css('gap'));
        if(isNaN(gap)){
            gap = 0;
        }
        $(this).attr('data-width',w + gap);

        if($(this).is('#image-carousel')){
            let curr = parseInt($(this).find('.pagination').attr('data-page-curr'));
            $(this).find('.container').scrollLeft(w * curr);
        }
    });
}

function paginationControls(){
    let control = $('.pagination').find('.control');
    let prev = $('.pagination').find('.prev');
    let next = $('.pagination').find('.next');
    let bubble = $('.pagination').find('.pag-bubbles').children();
    

    prev.addClass('inactive');
    $('.pagination').attr('data-page-curr',0);

    prev.on('click',function(){
        let page = $(this).parent().attr('data-page-curr');
        page--
        $(this).parent().attr('data-page-curr',page);
    });

    next.on('click',function(){
        let page = $(this).parent().attr('data-page-curr');
        page++
        $(this).parent().attr('data-page-curr',page);
    });

    control.on('click',function(){
        let curr = parseInt($(this).parent().attr('data-page-curr'));
        let amt = parseInt($(this).parent().attr('data-pages'));
        let scrDis = parseInt($(this).parents('.carousel').attr('data-width'));
        $(this).parents('.carousel').find('.container').scrollLeft(scrDis * curr);

        if(curr <= 0){
            $(this).addClass('inactive');
            $(this).siblings('.control').removeClass('inactive');
        } else if(curr >= amt){
            $(this).addClass('inactive');
            $(this).siblings('.control').removeClass('inactive');
        } else {
            $(this).parent().find('.control').removeClass('inactive');
        }

        $(this).siblings('.pag-bubbles').children().removeClass('active jux');

        $(this).siblings('.pag-bubbles').children().eq(curr).addClass('active');
        $(this).siblings('.pag-bubbles').children().eq(curr + 1).addClass('jux');
        $(this).siblings('.pag-bubbles').children().eq(curr - 1).addClass('jux');

        if($(this).parents().is('#image-carousel')){
            imageCarouselLabels();
        }
        if($(this).parents().is('#blog-carousel')){
            let post = $('#blog-carousel').find('.posts').children();
            post.removeClass('active jux');
            post.eq(curr).addClass('active');
            post.eq(curr + 1).addClass('jux');
            post.eq(curr - 1).addClass('jux');
        }
    });

    bubble.on('click',function(){
        let curr = $(this).index();
        let amt = parseInt($(this).parent().parent().attr('data-pages'));
        let scrDis = parseInt($(this).parents('.carousel').attr('data-width'));
        $(this).parent().parent().attr('data-page-curr',curr);
        $(this).parents('.carousel').find('.container').scrollLeft(scrDis * curr);

        if(curr <= 0){
            $(this).parent().siblings('.prev').addClass('inactive');
            $(this).parent().siblings('.next').removeClass('inactive');
        } else if(curr >= amt){
            $(this).parent().siblings('.next').addClass('inactive');
            $(this).parent().siblings('.prev').removeClass('inactive');
        } else {
            $(this).parent().siblings().removeClass('inactive');
        }

        $(this).siblings().removeClass('active jux');

        $(this).addClass('active');
        $(this).siblings().eq(curr + 1).addClass('jux');
        $(this).siblings().eq(curr - 1).addClass('jux');

        if($(this).parents().is('#image-carousel')){
            imageCarouselLabels();
        }

        if($(this).parents().is('#blog-carousel')){
            let post = $('#blog-carousel').find('.posts').children();
            post.removeClass('active jux');
            post.eq(curr).addClass('active');
            post.eq(curr + 1).addClass('jux');
            post.eq(curr - 1).addClass('jux');
        }

    });

}


//IMAGE CAROUSEL LABELS
function imageCarouselLabels(){
    let curr = parseInt($('#image-carousel').find('.pagination').attr('data-page-curr'));
    let label = $('#image-carousel').find('.labels').find('.label');
    const labels = ['Port of Marseille','Chapel of The Order','Assault on Fort Guyenne','Marseille Market District','The Red City Colosseum', 'Abandoned Village of Laurentius','Escape to Mount Ombrage','Slums of Marseille','The Lunar Festival'];
    const loc = [50,70,40,15,60,40,15,30,70];

    label.addClass('out');
    label.find('h2').addClass('out');

    //DELAY LABEL CHANGE UNTIL USER STOPS FOR 1.5s
    clearTimeout($.data(this, 'carsourelTimer'));
    $.data(this, 'carsourelTimer', setTimeout(function(){
        label.find('h2').text(labels[curr]);
        label.css('bottom',loc[curr]+'%')
        label.removeClass('out');
        setTimeout(function(){
            label.find('h2').removeClass('out');
        },1000);
    }, 1500));
}

//TRIGGER LABEL LOAD ON IMAGE CAROUSEL TOP
function triggerInitLabelLoad(){
    if($(window).scrollTop() >= $('#image-carousel').offset().top){
        $('#image-carousel').find('.label').first().removeClass('out');
        setTimeout(function(){
            $('#image-carousel').find('.label').first().find('h2').removeClass('out');
        },1000);
    }
}






