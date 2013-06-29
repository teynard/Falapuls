var MapGeneration = 
{
	components : ["position2d", "size2d", "childs", "positionId"],
	method : function()
	{	
		var idEntities = Puppets.find("positionId",true);
		var arrayEntities;
		arrayEntities = Puppets.Entities.getComponents(idEntities);
		var init = function()
		{
			for (_number in arrayEntities)
			{
				_entity = arrayEntities[_number];
				createChilds(_entity,_number);	
			}
		};
		var createChilds = function(parent,idParent)
		{
			var _parent = parent;
			console.log(_parent);
			var _positionArea;
			var _size = {w : 90 , h : 90};
			switch (_parent.positionId.corner)
			{
				case "top-left":
					_positionArea = { x: _parent.position2d.x , y:_parent.position2d.y };
				break;
				case "top-right":
				
				break;
				case "bottom-left":
				
				break;
				case "bottom-right":
				
				break;
			};

			for (var _number = 0, _x = 0;_number < _parent.childs.number; _number++, _x++)
			{
				// console.log(_x," <x lolol number> ",_number);
				Puppets.Entities.createEntity(
					entitiesModels["rectChild"], 
					{ 
						renderShape : {"color" : "yellow"},
						size2d : 
						{
							"width"  : canvas.width/2,
							"height" : canvas.height/2
						},
						position2d : {"x" : 0,"y" : canvas.height/2},
						parent : {number : idParent},
						positionId : { corner : _parent.positionId.corner }
					}
				);
			}
		}
		init();
	}
}
