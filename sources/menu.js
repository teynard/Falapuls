$(credits).fadeIn(2000);
$(title).animate({fontSize:"100"}, 2000, 'easeOutElastic');
$(playButton).toggle("puff");
$(playButton).click(function(){
	$(playButton).toggle("puff");
	$(title).fadeOut(500, function ()
	{
		$(player1Select).animate({marginLeft:"0", marginTop:"0"}, 400, 'linear');
		$(player2Select).animate({marginLeft:"512", marginTop:"0"}, 400, 'linear');
		$(player3Select).animate({marginLeft:"0", marginTop:"384"}, 400, 'linear');
		$(player4Select).animate({marginLeft:"512", marginTop:"384"}, 400, 'linear');
	});
	$(credits).fadeOut(500);
	/*canvas.style.display="inline";
	$(menu).fadeOut(1000);
	init();*/
})