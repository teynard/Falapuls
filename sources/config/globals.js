/************************************************************************************
 * JS File with all the global variables
 ***********************************************************************************/
var RADIUSBALL = 50;

function createPlayer()
{
	Puppets.Entities.createEntity(
		entitiesModels["attractor"], 
		{ 
			catchForces : {"force" : Math.random()*3},
			fromPlayer : {"player" : 1},
			position2d : {"x" : 50, "y" : 50},
			size2d : {"radius" : 20},
			renderShape : {"color" : "white"}
		}
		);

	Puppets.Entities.createEntity(
		entitiesModels["attractor"], 
		{ 
			catchForces : {"force" : Math.random()*3},
			fromPlayer : {"player" : 2},
			position2d : {"x" : 700, "y" : 50},
			size2d : {"radius" : 20},
			renderShape : {"color" : "white"}
		}
		);

	Puppets.Entities.createEntity(
		entitiesModels["attractor"], 
		{ 
			catchForces : {"force" : Math.random()*3},
			fromPlayer : {"player" : 3},
			position2d : {"x" : 50, "y" : 500},
			size2d : {"radius" : 20},
			renderShape : {"color" : "white"}
		}
		);

	Puppets.Entities.createEntity(
		entitiesModels["attractor"], 
		{ 
			catchForces : {"force" : Math.random()*3},
			fromPlayer : {"player" : 4},
			position2d : {"x" : 700, "y" : 500},
			size2d : {"radius" : 20},
			renderShape : {"color" : "white"}
		}
		);
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