function playerGeneration(numbOfPlayer)
{
	var color = ["hsla(241, 100%, 50%, 1)","hsla(207, 100%, 54%, 1)","hsla(207, 100%, 29%, 1)","hsla(223, 100%, 47%, 1)"];
	var position2d = [{"x" : 0,"y" : 0},
					{"x" : canvas.width/2,"y" : 0},
					{"x" : canvas.width/2,"y" : canvas.height/2},
					{"x" : 0,"y" : canvas.height/2}];
	var positionId = ["top-left","top-right","bottom-right","bottom-left"];
	var numbOfPlayer = numbOfPlayer;
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