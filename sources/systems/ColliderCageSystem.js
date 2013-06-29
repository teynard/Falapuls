var ColliderCageSystem =
{
	components : ["colliderCage", "position2d", "size2d", "velocity2d"],
	method : function(colliderCage, position2d, size2d, velocity2d)
	{
		var cage = Puppets.Entities.getComponents(Puppets.find("cageArea", true)[0]);
		var cagePosition = cage.position2d;
		var cageSize = cage.size2d;
		if()
	}
}