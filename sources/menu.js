window.onload = function() {
$(credits).fadeIn(2000);
$(title).animate({fontSize:"100"}, 2000, 'easeOutElastic');
$(playButton).toggle("puff");
$(playButton).click(function(){
	$(playButton).toggle("puff");
	$(title).fadeOut(500, function ()
	{
		$(playerSelect).toggle("explode", {pieces: 4});
		$(playerSelect).animate({fontSize:"60"}, 2000, 'linear');
	});
	$(credits).fadeOut(500);
	/*canvas.style.display="inline";
	$(menu).fadeOut(1000);
	init();*/
})
}