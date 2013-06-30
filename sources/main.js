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

	new Puppets(["RenderShape","RenderStroke", "AttackSystem", "AttractedSystem","AttractorSystem", "Kinematic", "RenderPulse","AreaDetection"]);


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
		playerGeneration(playerNumber);
		Puppets.Entities.createEntity(
		entitiesModels["ball"],
		{
			renderShape : {"color" : "hsla(307, 100%, 40%, 1)"},
			size2d : {'radius' : RADIUSBALL},
			position2d : {'x' : Math.random()*700, 'y' : Math.random()*500}
		}
		);
	
	// Puppets.Entities.removeComponent(16,'renderShape');

	gameloop();
	// console.log(Puppets.Entities.list);
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
      		'medias/sounds/accordeon_1.ogg',
      		'medias/sounds/piano_1.ogg',
      		'medias/sounds/guitar_1.ogg'
    	],
    	finishedLoading
    );

  	bufferLoader.load();
}

function finishedLoading(bufferList) {
	
	window.audioBufferList = bufferList;
	console.log(audioBufferList);
}

function launchPulse(buffer,player)
{
	var players = Puppets.Entities.getComponents(Puppets.find("life",true))

	for (var numberoff=0;numberoff< players.length;numberoff++)
	{
		if (players[numberoff].id.number == player-1)
		{
			var source = audioContext.createBufferSource();
			source.buffer = buffer;
			source.connect(audioContext.destination);
			source.start(0);
			console.log(buffer);
			var position2d_temp = [{"x" : 256, "y" : 192},{"x" : 768, "y" : 192},{"x" : 768, "y" : 576},{"x" : 256, "y" : 576}]
			Puppets.Entities.createEntity( 
				entitiesModels["pulse"], 
				{ 
					renderPulse : { "color" : "rgb(255,255,0)", "buffer" : buffer, "compteur" : 0 },
					position2d  : position2d_temp[players[numberoff].id.number],
					size2d      : { "radius" : 3 }
				}
			);
					// console.log(position2d_temp)		
			
		}
	}
}
