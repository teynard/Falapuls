$(credits).fadeIn(2000);
$(title).animate({fontSize:"100"}, 2000, 'easeOutElastic');
$(playButton).toggle("puff");
$(playButton).click(function(){
	$(playButton).toggle("puff");
	canvas.style.display="inline";
	$(menu).fadeOut(1000);
	init();
})