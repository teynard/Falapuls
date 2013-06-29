window.keys = [];
window.playerKeys = [[49,50,51], [65,90,69], [81, 83, 68], [87, 88, 67]];
window.addEventListener("keydown", keyDown, true);
window.addEventListener("keyup", keyUp, true);

function keyDown(e)
{
	keys[e.keyCode] = true;
}
function keyUp(e)
{
	for (var i = 0 ; i < 4 ; i++)
		spellInput(i, playerKeys[i])

	delete keys[e.keyCode];
}

function spellInput(playerNum, spellKeys)
{
	if (keys[spellKeys[0]])
	{
		console.log("SORT 1 du JOUEUR " + (playerNum+1));
	}
	else if (keys[spellKeys[1]])
	{
		console.log("SORT 2 du JOUEUR " + (playerNum+1));
	}
	else if (keys[spellKeys[2]])
	{
		console.log("SORT 3 du JOUEUR " + (playerNum+1));
	}
}