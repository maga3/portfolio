$(document).ready(function () {
    if (sessionStorage.getItem('video')=== null) {
        $('.container').hide();
        $('<video autoplay id="gifName"><source type="video/webm" src="gif/video-presentacion.webm"></source></video>').insertBefore('.container');
        setTimeout(() => {
            $('#gifName').remove();
            $('.container').show();
        }, 9000);        
        sessionStorage.setItem('video','true');
    }
});