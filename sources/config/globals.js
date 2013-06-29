/************************************************************************************
 * JS File with all the global variables
 ***********************************************************************************/
var RADIUSBALL = 50;

function createPlayer()
{
	for(var i = 0; i < 3; i++)
	{
		Puppets.Entities.createEntity(
		entitiesModels["attractor"], 
		{ 
			catchForces : {"force" : Math.round(Math.random()*10)},
			fromPlayer : {"player" : 1},
			position2d : {"x" : Math.random()*700, "y" : Math.random()*500},
			size2d : {"radius" : 20},
			renderShape : {"color" : "white"}
		}
		);
	}
}

function rand(min, max) {
    return parseInt(Math.random() * (max-min+1), 10) + min;
}

function get_random_color() {
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}