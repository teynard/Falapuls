// window.onload = init;

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
	audioInstanciation();

	//Instanciate Puppet context with all the systems we use
	new Puppets(["RenderShape","RenderStroke", "AttractorSystem", "Kinematic", "RenderPulse"]);

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
			positionId : { corner : "bottom-left" }
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
			positionId : { corner : "bottom-right" }
		}
	);
	MapGeneration.method();

	for(var i = 0; i < 50; i++)
	{
		Puppets.Entities.createEntity(
		entitiesModels["ball"],
		{
			renderShape : {"color" : get_random_color()},
			size2d : {'radius' : RADIUSBALL},
			position2d : {'x' : Math.random()*700, 'y' : Math.random()*500}
		}
		);
	}

	createPlayer();
	
	// Puppets.Entities.removeComponent(16,'renderShape');

	gameloop();
	console.log(Puppets.Entities.list);
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

		
/************************************************************************************
 * update function that iterates 60 times a sec
 * renders the canvas and run the systems
 ***********************************************************************************/
function gameloop()
{
	Puppets.run();
	requestAnimFrame(gameloop);
}

		
/************************************************************************************
 * instanciate audio buffer
 ***********************************************************************************/
function audioInstanciation()
{
	try 
	{
		// Fix up for prefixing
		window.AudioContext = window.AudioContext||window.webkitAudioContext;
		window.audioContext = new AudioContext();
	}
	catch(e) 
	{
		alert('Web Audio API is not supported in this browser');
	}

  	bufferLoader = new BufferLoader(
    	audioContext,
    	[
      		'medias/sounds/accept.mp3',
      		'medias/sounds/amulet.wav',
      		'medias/sounds/pumpkin.ogg'
    	],
    	finishedLoading
    );

  	bufferLoader.load();
}

function finishedLoading(bufferList) {
	
	window.audioBufferList = bufferList;
	console.log(audioBufferList);
}

function launchPulse(buffer)
{
	var source = audioContext.createBufferSource();
	source.buffer = buffer;
	source.connect(audioContext.destination);
	source.start(0);
	console.log(buffer);


	Puppets.Entities.createEntity(
		entitiesModels["pulse"], 
		{ 
			renderPulse : { "color" : "rgb(255,255,0)", "buffer" : buffer, "compteur" : 0 },
			position2d  : { "x" : 200, "y" : 200 },
			size2d      : { "radius" : 3 }
		}
	);
}
