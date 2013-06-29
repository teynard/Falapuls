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
	new Puppets(["RenderShape","RenderStroke", "AttackSystem", "ColliderCageSystem", "Kinematic"]);

	//Instanciate background entity
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

	Puppets.Entities.createEntity(
		entitiesModels["ball"],
		{
			renderShape : {"color" : "white"},
			size2d : {'radius' : RADIUSBALL},
			position2d : {'x' : 400, 'y' : 400}
		}
	);

	Puppets.Entities.createEntity(
		entitiesModels["cage"],
		{
			renderStroke : {"color" : "red", "shape" : "square", "weight" : 10},
			size2d :
			{
				"width"  : canvas.width,
				"height" : canvas.height
			},
			
		}
	);

	createPlayer();

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

