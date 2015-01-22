$(document).ready(function() {
    
    if (photo_album_id != "") {

    	$.ajax({
			dataType: "json",
			url: "/club/scripts/ImageAlbum/album_json.asp?ANAME="+photo_album_id,
			success: function(data) {
				$(".wrap-photo-album-view h1").html(data.albumtitle);
				$(".wrap-photo-album-view div.text").html(data.albumdesc);

				$.each(data.images, function(i,item) {
					$(".wrap-photo-album-view .box-photo-album-pictures").append('<a href="'+item.url+'"><img src="/common/thumbnail.asp?filename='+item.url+'&CROP=1&size=200" alt="'+item.caption+'"></a>');
				});

				var options = {};
				$(".wrap-photo-album-view .box-photo-album-pictures a").photoSwipe(options);
			}
		});

    }

});