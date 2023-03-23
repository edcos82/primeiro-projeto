$(document).ready(function() {
	
	$(".thumbs li").click(function(){
		var thumbs = $(this).find("img").attr("src");
		var cover = $(".cover img");

		cover.fadeTo("200", "0", function(){
			cover.attr("src", thumbs).fadeTo("150", 1);
		})

		$(".thumbs li").remoClass("active");
		$(this).addClass("active");

	});

});