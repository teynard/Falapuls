var ColliderCageSystem =
{
	components : ["colliderCage", "position2d", "size2d", "velocity2d"],
	method : function(colliderCage, position2d, size2d, velocity2d)
	{
		var cage = Puppets.Entities.getComponents(Puppets.find("cageArea", true)[0])[0];
		var cagePosition = cage.position2d;
		var cageSize = cage.size2d;
		if(cagePosition.x >= position2d.x-size2d.radius+velocity2d.x ||
			cagePosition.x+cageSize.x <= position2d.x+size2d.radius+velocity2d.x ||
			cagePosition.y >= position2d.y-size2d.radius+velocity2d.y ||
			cagePosition.y+cageSize.y <= position2d.y+size2d.radius+velocity2d.y)
		{
			velocity2d.x *= -50;
			velocity2d.y *= -50;
		}
	}
}