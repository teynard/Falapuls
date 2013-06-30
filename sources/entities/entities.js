var entitiesModels =
{
	rect :{"components" : [{"renderShape" : {"shape" : "square"}}, "position2d", "size2d"]},
	rectParent :{"components" : [{"renderShape" : {"shape" : "square"}}, "position2d", "size2d","childs","positionId"]},
	ball :{"components" : [{"renderShape" : {"shape" : "circle"}}, "position2d", "size2d", "velocity2d", "ballCenter", "colliderCage"]},
	rectChild :{"components" : [ "position2d", "size2d","parent"]},
	attractor :{"components" : [{"renderShape" : {"shape" : "circle"}}, "catchForces", "fromPlayer", "position2d", "size2d"]},
	cage :{"components" : ["cageArea", "position2d", "renderStroke", "size2d"]},
	pulse :{"components" : ["renderPulse", "position2d", "size2d"]}
}