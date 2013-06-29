var AttackSystem = 
{
	components : ["catchForces", "fromPlayer", "position2d"],
	method : function(catchForces, fromPlayer, position2d)
	{
		var ball = Puppets.find("ballCenter")[0];
		var ballComponents = Puppets.Entities.getComponents(ball)[0];
		var velocity2d = ballComponents["velocity2d"];
		var ballPosition = ballComponents["position2d"];
		var angle = Math.atan2(ballPosition.x - position2d.x, ballPosition.x - position2d.y) + Math.PI/2;
		var force = {x : Math.cos(angle) * catchForces.force, y : -(Math.sin(angle) * catchForces.force)};
		var newVelocity = Vectors.add(force, velocity2d); 
		velocity2d.x = newVelocity.x;
		velocity2d.y = newVelocity.y;
	}	
}