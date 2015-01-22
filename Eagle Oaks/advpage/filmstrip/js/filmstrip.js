$(document).ready(function() {
    
    var cont = 0;
    $(".wrap_testimonials").each(function() {

    	photo_album_id = $(this).attr("title");

    	$.ajax({
			dataType: "json",
			url: "/club/scripts/ImageAlbum/album_json.asp?ANAME="+photo_album_id,
			async: false,
			success: function(data) {
				
				$(".wrap_testimonials[title='"+photo_album_id+"']").find(".filmstripWrap h2.filmstripAlbumTitle").html(data.albumtitle);
				$(".wrap_testimonials[title='"+photo_album_id+"']").find(".filmstripWrap div.filmstripDescription").html(data.albumdesc);


				$.each(data.images, function(i,item) {
					$(".wrap_testimonials[title='"+photo_album_id+"']").find(".filmstripItems").append('<a class="filmstripFancy" rel="filmstrip_'+cont+'" href="'+item.url+'"><img src="'+item.url+'" alt="'+item.caption+'" title="'+item.caption+'"></a>');
				});

				var slices = $(".wrap_testimonials[title='"+photo_album_id+"']").find("a.filmstripFancy");
				for(var i = 0; i < slices.length; i+=3) {
				 	slices.slice(i, i+3).wrapAll("<div></div>");
				}
			}
		});	
    	
    	cont ++;

    });

    var options = {};
	$(".filmstrip").scrollable(options);

	$("a.filmstripFancy").fancybox();

	$(".wrap_testimonials .filmstripWrap").each(function() {

		if ($(this).find(".filmstripItems a.filmstripFancy").length < 4) {

			$(this).find("a.prev.browse").hide();
			$(this).find("a.next.browse").hide();

		};

	});

});