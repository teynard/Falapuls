function playerGeneration(numbOfPlayer)
{
	window.addEventListener("keydown", keyDown, true);
	window.addEventListener("keyup", keyUp, true);
	

	var color = ["rgb(211,32,39)","rgb(84,237,89)","rgb(0,204,255)","rgb(255,237,0)"];
	var position2d = [{"x" : 0,"y" : 0},
					{"x" : canvas.width/2,"y" : 0},
					{"x" : canvas.width/2,"y" : canvas.height/2},
					{"x" : 0,"y" : canvas.height/2}];
	
	var positionId = ["top-left","top-right","bottom-right","bottom-left"];
	
	var numbOfPlayer = numbOfPlayer;
	
	if(numbOfPlayer == 2 )
	PlayersBool = [true,true,false,false];
	else if (numbOfPlayer == 3)
		PlayersBool = [true,true,true,false];
	else if (numbOfPlayer == 4 )
		PlayersBool = [true,true,true,true];
	
	for (var count = 0; count<numbOfPlayer ; count++)
	{
		
		var rectangleId = Puppets.Entities.createEntity(
		entitiesModels["rectParent"], 
		{ 
			renderShape : {"color" : color[count]},
			size2d :{"width"  : canvas.width/2,"height" : canvas.height/2},
			position2d : position2d[count],
			childs : {number : 0},
			positionId : { corner : positionId[count] }
		}
		);
		var positionAttractor = [{"x" : 256, "y" : 192},{"x" : 768, "y" : 192},{"x" : 768, "y" : 576},{"x" : 256, "y" : 576}];
		var attractorId = Puppets.Entities.createEntity(
		entitiesModels["attractor"], 
		{ 
			catchForces : {"force" : 0},
			fromPlayer : {"player" : count},
			position2d : positionAttractor[count],
			size2d : {"radius" : 20},
			renderShape : {"color" : "white"}
		}
		);
		// creation de l'entité player
		Puppets.Entities.createEntity(
		entitiesModels["player"],
		{
			attractorId : {"number" :attractorId },
			life : {'number' : "100"},
			rectParentId: {'number' : rectangleId },
			id : {'number' : count},
		}
		);
	}
}