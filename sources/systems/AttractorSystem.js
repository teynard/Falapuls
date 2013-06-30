var AttractorSystem = 
{
	components : ["ballCenter", "position2d", "velocity2d"],
	method : function(ballCenter,position2d, velocity2d, entity)
	{
		var attractors = Puppets.Entities.getComponents(Puppets.find("fromPlayer", true));
		for (var i = 0, attractor; attractor = attractors[i]; i += 1) {
			var direction = Vectors.normalize(Vectors.sub(attractor.position2d, position2d))
				, force = Vectors.mult(direction, Math.floor(attractor.catchForces.force))

			var tempVelocity = velocity2d;
			tempVelocity.x += force.x;
			tempVelocity.y += force.y;
			tempVelocity = Vectors.limit(tempVelocity, 5);

			velocity2d.x = tempVelocity.x;
			velocity2d.y = tempVelocity.y;
		}
	}	
}