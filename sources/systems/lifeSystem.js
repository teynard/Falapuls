var lifeDetection =  
{
	components : ["attractorId", "life", "rectParentId","idListLife"],
	method : function(attractorId, life, rectParentId,idListLife)
	{
		//console.log(idListLife)
		var _life = life.number;
		if(_life<5)	
		{
			Puppets.Entities.getComponents(rectParentId.number)[0].renderOpacity.opacity = 0;
			PlayersBool[idListLife.number] = false;
			console.log(PlayersBool);
		}
		var nbAlive = 0;
		//console.log(PlayersBool);
		for(var i = 0; i < PlayersBool.length; i++)
		{
			if(PlayersBool[i])
				nbAlive++
		}
		if(nbAlive < 2)
			GameOver();
	}
}