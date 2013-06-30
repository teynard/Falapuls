var AttractorSystem = 
{
	components : ["ballCenter", "position2d", "velocity2d"],
	method : function(ballCenter,position2d, velocity2d, entity)
	{
		var attractors = Puppets.Entities.getComponents(Puppets.find("fromPlayer", true));
		var direction = {x : 0, y : 0}
		for(var i = 0; i < attractors.length; i++)
		{
			var attractor = attractors[i];
			var attractorPosition = attractor.position2d;
			var tempDirection = Vectors.sub(attractorPosition, position2d);
			var magnitude = Vectors.magnitude(direction)

			tempDirection = Vectors.normalize(tempDirection);
			tempDirection = Vectors.mult(tempDirection, attractor.catchForces.force);

			direction = Vectors.add(direction, tempDirection);
		}
		var newVelocity = Vectors.add(direction, velocity2d);
		newVelocity = Vectors.limit(newVelocity, 10);
		velocity2d.x = newVelocity.x;
		velocity2d.y = newVelocity.y;
	}	
}