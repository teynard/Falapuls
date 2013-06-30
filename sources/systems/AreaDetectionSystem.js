var AreaDetection =  
{
	components : ["colliderCage", "position2d", "size2d", "velocity2d"],
	method : function(colliderCage, position2d, size2d, velocity2d)
	{
		var gravityPosition = position2d;
		var gravitySize = size2d;
		var gravityVelocity = velocity2d;
		var players = Puppets.Entities.getComponents(Puppets.find("id", true));
		var attractor = Puppets.Entities.getComponents(Puppets.find("catchForces", true));
		for (var numberof in attractor)
		{
			var distance = Math.sqrt(sqr((attractor[numberof].position2d.y)- gravityPosition.y) + sqr(attractor[numberof].position2d.x- gravityPosition.x));		
			switch (attractor[numberof].fromPlayer.player)
			{
				case 1: 
						testDistance(players,distance,attractor[numberof].fromPlayer.player);
				break;
				case 2:
						testDistance(players,distance,attractor[numberof].fromPlayer.player);
				break;
				case 3:
						testDistance(players,distance,attractor[numberof].fromPlayer.player);
				break;
				case 4:
						testDistance(players,distance,attractor[numberof].fromPlayer.player);
				break;
			}
			
		}
		// var numBall =  Puppets.find("ballCenter", true);
		// var ball = Puppets.Entities.list[numBall[0]];

	}
}
function testDistance(players,distance,player)
{
		// console.log(players[player].life.numberof);
	if(distance<=200&& distance>150)
	{
		players[player].life.number -=0.001;
	}
	else if(distance<=150 && distance>100)
	{
		players[player].life.number -=0.001;
	}
	else if(distance<=100)
	{
		players[player].life.number -=0.001;
	}
}
function sqr(x)
{
	return x*x;
}