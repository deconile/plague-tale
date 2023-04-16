
//WHEN PAGE HAS LOADED
$(window).on('load', function(){
    characterAccordion();
});


// CHARACTER ACCORDION
function characterAccordion(){
    let accordion = $('#characters').find('.tab');
    
    accordion.on('click', function(){
        accordion.parent().removeClass('active');
        if(!$(this).parent().hasClass('active')){
            $(this).parent().addClass('active');
        }

        let label = $(this).siblings().find('.label');
        if(label.hasClass('out')){
            label.removeClass('out');
        }
           
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop() >= $('#characters').offset().top){
            let label = $('#characters').find('.character.active').find('.labels').find('.label').first();
            if(label.hasClass('out')){
                label.removeClass('out');
            }
        }
    });
}
