var AttackSystem = 
{
	components : ["catchForces", "fromPlayer"],
	method : function(catchForces, fromPlayer)
	{
		var ball = Puppets.find("ballCenter")[0];
		var ballComponents = Puppets.Entities.getComponents(ball)[0];
		var velocity2d = ballComponents["velocity2d"];
		var force = {x : catchForces.force, y : catchForces.force};
		var newVelocity = Vectors.add(force, velocity2d); 
		velocity2d.x = newVelocity.x;
		velocity2d.y = newVelocity.y;

		Puppets.Entities.removeEntity(Puppets.find("fromPlayer"));
	}	
}