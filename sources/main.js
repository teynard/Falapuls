window.onload = init;

//looping function
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


/************************************************************************************
 * init function
 ***********************************************************************************/
function init() 
{
	canvasInstanciation();

	//Instanciate Puppet context with all the systems we use
	new Puppets(["RenderShape","RenderStroke", "AttackSystem", "Kinematic","AreaDetection"]);

	//Instanciate background entity
	// background
	Puppets.Entities.createEntity(
		entitiesModels["rect"], 
		{ 
			renderShape : {"color" : "black"},
			size2d : 
			{
				"width"  : canvas.width,
				"height" : canvas.height
			}
		}
	);
	// entitie parent top left
	Puppets.Entities.createEntity(
		entitiesModels["rectParent"], 
		{ 
			renderShape : {"color" : "purple"},
			size2d : 
			{
				"width"  : canvas.width/2,
				"height" : canvas.height/2
			},
			position2d : {"x" : 0,"y" : 0},
			childs : {number : 4},
			positionId : { corner : "top-left"}
		}
	);
	// Puppets.Entities.removeComponent(1,'renderShape');
	// entitie parent top right
	Puppets.Entities.createEntity(
		entitiesModels["rectParent"], 
		{ 
			renderShape : {"color" : "blue"},
			size2d : 
			{
				"width"  : canvas.width/2,
				"height" : canvas.height/2
			},
			position2d : {"x" : canvas.width/2,"y" : 0},
			childs : {number : 4},
			positionId : { corner : "top-right"}
		}
	);
	// Puppets.Entities.removeComponent(6,'renderShape');
	// entitie parent bottom right
	Puppets.Entities.createEntity(
		entitiesModels["rectParent"], 
		{ 
			renderShape : {"color" : "red"},
			size2d : 
			{
				"width"  : canvas.width/2,
				"height" : canvas.height/2
			},
			position2d : {"x" : canvas.width/2,"y" : canvas.height/2},
			childs : {number : 4},
			positionId : { corner : "bottom-right" }
		}
	);
	// Puppets.Entities.removeComponent(11,'renderShape');
	// entitie parent bottom left
	Puppets.Entities.createEntity(
		entitiesModels["rectParent"], 
		{ 
			renderShape : {"color" : "yellow"},
			size2d : 
			{
				"width"  : canvas.width/2,
				"height" : canvas.height/2
			},
			position2d : {"x" : 0,"y" : canvas.height/2},
			childs : {number : 4},
			positionId : { corner : "bottom-left" }
		}
	);
	MapGeneration.method();
	
	// Puppets.Entities.removeComponent(16,'renderShape');

	gameloop();
}


/************************************************************************************
 * instanciate the canvas, his context and hi size
 ***********************************************************************************/
function canvasInstanciation()
{
	window.canvas  = document.getElementById("canvas");
	window.context = canvas.getContext("2d");
	canvas.width   = 1024;
	canvas.height  = 768;
}

function gameloop()
{
	Puppets.run();
	requestAnimFrame(gameloop);
}

