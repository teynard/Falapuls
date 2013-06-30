var AttractorSystem = 
{
	components : ["ballCenter", "position2d", "velocity2d"],
	method : function(ballCenter,position2d, velocity2d, entity)
	{
		var attractors = Puppets.Entities.getComponents(Puppets.find("fromPlayer", true));
		for (var i = 0, attractor; attractor = attractors[i]; i += 1) {
			var direction = Vectors.normalize(Vectors.sub(attractor.position2d, position2d))
				, force = Vectors.mult(direction, Math.round(attractor.catchForces.force))

			var tmpVelocity = velocity2d;
			tmpVelocity.x += force.x;
			tmpVelocity.y += force.y;
			velocity2d.x = Vectors.limit(tmpVelocity, 10).x;
			velocity2d.y = Vectors.limit(tmpVelocity, 10).y;
		}
	}	
}