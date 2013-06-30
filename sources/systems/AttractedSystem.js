var AttractedSystem = 
{
	components : ["attracted", "position2d", "velocity2d"],
	method : function(attracted,position2d, velocity2d, entity)
	{
		var attractor = Puppets.Entities.getComponents(attracted.attractor)[0];
		var direction = Vectors.normalize(Vectors.sub(attractor.position2d, position2d))
		var force = Vectors.mult(direction,1)


		var tempVelocity = velocity2d;
		tempVelocity.x += force.x;
		tempVelocity.y += force.y;
		tempVelocity = Vectors.limit(tempVelocity, 10);

		velocity2d.x = tempVelocity.x;
		velocity2d.y = tempVelocity.y;
	}	
}