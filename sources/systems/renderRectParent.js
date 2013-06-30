var RenderRectParent = 
{
	components : ["renderStroke", "position2d", "size2d","renderOpacity"],
	method : function(renderShape, position2d, size2d, renderOpacity)
	{
		var shape = renderShape.shape;
		var color = renderShape.color;
		var weight = renderShape.weight;
		var opacity = renderOpacity.opacity;
		// console.log("ici")
		color = get_random_color();
		context.lineWidth = weight;
		context.strokeStyle = color;

		switch (shape)
		{
			case "square":
				context.globalAlpha = opacity;   
				context.fillRect(position2d.x, position2d.y, size2d.width, size2d.height);
				context.globalAlpha = 1;
			break;

			case "circle":
				context.globalAlpha = opacity;
				context.beginPath();		
				context.arc(position2d.x,position2d.y,size2d.radius, 0, 2*Math.PI);
				context.stroke();
				context.globalAlpha = 1;
			break;	
		}
	}
}
