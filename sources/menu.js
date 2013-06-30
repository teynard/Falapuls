var playerNumber = 2;

$(credits).fadeIn(2000);
$(title).animate({fontSize:"100"}, 2000, 'easeOutElastic');
$(playButton).toggle("puff");
$(playButton).click(function(){
	$(playButton).toggle("puff");
	$(title).fadeOut(500, function ()
	{
		/*$(playerAdd).toggle("puff");
		$(startButton).toggle("puff");
		$(player1Select).toggle("fadeIn");
		$(player2Select).toggle("fadeIn");*/
		$(info).toggle("puff");
		$(players2).toggle("puff");
		$(players3).toggle("puff");
		$(players4).toggle("puff");
		$(tutorial).toggle("puff");
		$(manette).toggle("puff");
	});
	$(credits).fadeOut(500);
})

/*$(playerAdd).click(function(){
	playerNumber++
	console.log(playerNumber);
	$(player3Select).toggle("fadeIn");
})

if (playerNumber >= 4)
{
	$(player4Select).toggle("fadeIn");
}

if (playerNumber >= 5)
{
	playerNumber = 4;
}

$(startButton).click(function(){
	canvas.style.display="inline";
	$(menu).fadeOut(1000);
	init();
})*/

$(players2).click(function(){
	playerNumber = 2;
	canvas.style.display="inline";
	$(menu).fadeOut(1000);
	init();
})
$(players3).click(function(){
	playerNumber = 3;
	canvas.style.display="inline";
	$(menu).fadeOut(1000);
	init();
})
$(players4).click(function(){
	playerNumber = 4;
	canvas.style.display="inline";
	$(menu).fadeOut(1000);
	init();
})

function GameOver()
{
	canvas.style.display="inline";
	$(gameOver).fadeIn(1000, function (){
	$(gameOverTitle).animate({fontSize:"74"}, 2000, 'easeOutElastic');
	$(retryButton).toggle("puff");
	$(backButton).toggle("puff");
	});
}

$(backButton).click(function(){
	document.location ="index.html";
});

$(retryButton).click(function(){
	canvas.style.display="inline";
	init();
});