/************************************************************************************
 * JS File with all the global variables
 ***********************************************************************************/
var RADIUSBALL = 50;

function attack(player, force, element)
{
	Puppets.Entities.createEntity(
	entitiesModels["attack"], 
	{ 
		catchForces : {"force" : force, "element" : element},
		fromPlayer : {"player" : player}
	}
	);
}