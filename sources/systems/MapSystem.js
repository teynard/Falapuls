var MapGeneration = 
{
	components : ["position2d", "size2d", "childs", "positionId"],
	method : function()
	{	
		var idEntities = Puppets.find("positionId",true);
		var arrayEntities = [];
		arrayEntities.push(Puppets.Entities.getComponents(idEntities));
		console.log(arrayEntities)
		var init = function()
		{
			console.log(_positionId)
			switch (_positionId)
			{
				case "top-left":
					console.log("top-left");
				break;
				case "top-right":
					console.log("top-right");
				break;
				case "bottom-left":
					console.log("bottom-left");
				break;
				case "bottom-right":
					console.log("bottom-right");
				break;
			}			
		};
		init();
	}
}
