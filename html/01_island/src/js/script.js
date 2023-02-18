$(function(){
    $('.carrossel img').click(function(){
        var cover = $('.cover img');
        var carrossel = $(this).attr('src');

        if(cover.attr('src') !== carrossel) {
        cover.fadeTo('200', '0', function () {
            cover.attr('src', carrossel);
            cover.fadeTo('150', '1');
        });

        $('.carrossel img').removeClass('active');
        $(this).addClass('active');
        }    
    });

});