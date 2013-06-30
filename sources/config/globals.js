/************************************************************************************
 * JS File with all the global variables
 ***********************************************************************************/
var RADIUSBALL = 50;

function createPlayer()
{

	Puppets.Entities.createEntity(
	entitiesModels["attractor"], 
	{ 
		catchForces : {"force" : 0},
		fromPlayer : {"player" : 1},
		position2d : {"x" : canvas.width/4 + canvas.width/2, "y" : canvas.height/4},
		size2d : {"radius" : 20},
		renderShape : {"color" : "white"}
	}
	);

	Puppets.Entities.createEntity(
	entitiesModels["attractor"], 
	{ 
		catchForces : {"force" : 0},
		fromPlayer : {"player" : 2},
		position2d : {"x" : canvas.width/4, "y" : canvas.height/4},
		size2d : {"radius" : 20},
		renderShape : {"color" : "white"}
	}
	);

	Puppets.Entities.createEntity(
	entitiesModels["attractor"], 
	{ 
		catchForces : {"force" : 0},
		fromPlayer : {"player" : 3},
		position2d : {"x" : canvas.width/4, "y" : canvas.height/4 + canvas.height/2},
		size2d : {"radius" : 20},
		renderShape : {"color" : "white"}
	}
	);

	Puppets.Entities.createEntity(
	entitiesModels["attractor"], 
	{ 
		catchForces : {"force" : 0},
		fromPlayer : {"player" : 4},
		position2d : {"x" : canvas.width/4 + canvas.width/2, "y" : canvas.height/4 + canvas.height/2},
		size2d : {"radius" : 20},
		renderShape : {"color" : "white"}
	}
	);
}

function attack(player, attack)
{
	player = Puppets.Entities.getComponents(Puppets.find("fromPlayer player="+player, true))[0];
	console.log(player);
	attack = player[attack];
	if(attack.count >= attack.coolDown)
	{
		player.catchForces.force -= attack.force;
		attack.count = 0;
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