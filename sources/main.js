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
	audioInstanciation();

	//Instanciate Puppet context with all the systems we use
	new Puppets(["RenderShape", "Kinematic", "RenderPulse"]);

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
			position2d : {'x' : 400, 'y' : 400},
			velocity2d : {'x' : 1, 'y' : 0}
		}
	);

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
			size2d      : { "radius" : 5 }
		}
	);
}
