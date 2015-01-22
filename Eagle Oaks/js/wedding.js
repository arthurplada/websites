$(document).ready(function () {
    $('.testimonial').cycle({
        timeout: 6000,
        speed: '2000'
    });

    $.ajax({
        dataType: "json",
        url: "/club/scripts/ImageAlbum/album_json.asp?AID=7482",
        success: function (data) {

            $.each(data.images, function (i, item) {
                $(".cycle-slideshow.gallery").append('<img src="/common/thumbnail.asp?filename=' + item.url + '&SIZE=578">');
            });

            var options = {};
            $(".cycle-slideshow.gallery").cycle({
                timeout: 0,
                speed: '1500',
                prev: '.cycle-prev',
                next: '.cycle-next'
            });
        }
    });

});