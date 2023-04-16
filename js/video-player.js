

$(window).on('load', function(){
    activateVideo();
    closeVideo();
});

var vidId;

function activateVideo(){
    let play = $('#videos').find('.content-box');
    let player = $('#videos').find('.video-player');


    play.children().on('click', function(){

        vidId = $(this).parent().attr('data-video-id');
        console.log(vidId);
        
        if(!$(this).parent().hasClass('active')){
            $('#videos').addClass('active');
            play.removeClass('active');
            $(this).parent().addClass('active');
        }

        if(player.hasClass('active')){
            player.removeClass('active');
            setTimeout(function(){
                embedVideo();
            },1000);
            setTimeout(function(){
                player.addClass('active');
            },1500);
        } else {
            embedVideo();
            setTimeout(function(){
                player.addClass('active');
            },500);
        }
    });
}

function embedVideo(){
    let player = $('#videos').find('.video-player').find('.video-container');
    let videoTemplate = `
    <iframe class="video" src="https://www.youtube.com/embed/${vidId}?rel=0&modestbranding=1&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    ` 
    
    player.empty();
    player.append(videoTemplate);
}

function closeVideo(){
    let x = $('#videos').find('.video-player').find('.close');

    x.on('click', function(){
        $('#videos').find('.video-player').find('.video-container').empty();
        $('#videos').removeClass('active');
        $('#videos').find('.video-player').removeClass('active');
        $('#videos').find('.content-box').removeClass('active');
    });
}