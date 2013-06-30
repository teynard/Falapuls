var AreaDetection =  
{
	components : ["colliderCage", "position2d", "size2d", "velocity2d"],
	method : function(colliderCage, position2d, size2d, velocity2d)
	{
		var gravityPosition = position2d;
		var gravitySize = size2d;
		var gravityVelocity = velocity2d;
		var players = Puppets.find("id", true);
		var attractor = Puppets.Entities.getComponents(Puppets.find("catchForces", true));
		for (var numberof in attractor)
		{
			var distance = Math.sqrt(sqr((attractor[numberof].position2d.y)- gravityPosition.y) + sqr(attractor[numberof].position2d.x- gravityPosition.x));		
			switch (attractor[numberof].fromPlayer.player)
			{
				case 1: if(distance<=200)
						{
							players[0].life.number 
						}

				break;
				case 2:

				break;
				case 3:

				break;
				case 4:

				break;
			}
			
		}
		// var numBall =  Puppets.find("ballCenter", true);
		// var ball = Puppets.Entities.list[numBall[0]];

	}
}

function sqr(x)
{
	return x*x;
}