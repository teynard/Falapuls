var RenderPulse = 
{
	components : ["renderPulse", "position2d", "size2d"],
	method : function(renderPulse, position2d, size2d)
	{
		console.log("lol");
		context.fillStyle = (renderPulse.color);
		context.beginPath();
		context.arc(position2d.x,position2d.y,size2d.radius, 0, 2*Math.PI);
		context.fill();
	}
}