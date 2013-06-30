var lifeDetection =  
{
	components : ["attractorId", "life", "rectParentId","idListLife"],
	method : function(attractorId, life, rectParentId,idListLife)
	{
		var _life = life.number;
		console.log(_life, idListLife.number);
		if(_life<5)	
		{
			Puppets.Entities.list[rectParentId].renderOpacity.opacity = 0;
			PlayersBool[idListLife] = false;
		}
		else
		{
			// console.log(life);
			Puppets.Entities.list[rectParentId.number].renderOpacity.opacity -= 0.01;
		}
	}
}