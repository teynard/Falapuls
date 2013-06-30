var entitiesModels =
{
	rect :{"components" : [{"renderShape" : {"shape" : "square"}}, "position2d", "size2d"]},
	rectParent :{"components" : [{"renderShape" : {"shape" : "square"}}, "position2d", "size2d","childs","positionId"]},
	ball :{"components" : [{"renderShape" : {"shape" : "circle"}}, "position2d", "size2d", "velocity2d", "ballCenter", "colliderCage"]},
	// head > ball :{"components" : [{"renderShape" : {"shape" : "circle"}}, "position2d", "size2d", "velocity2d", "ballCenter"]},
	rectChild :{"components" : [ "position2d", "size2d","parent"]},
	attractor :{"components" : [{"renderShape" : {"shape" : "circle"}}, "catchForces", "fromPlayer", "position2d", "size2d", "attackOne", "attackTwo", "attackThree"]},
	cage :{"components" : ["cageArea", "position2d", "renderStroke", "size2d"]},
	pulse :{"components" : ["renderPulse", "position2d", "size2d"]},
	player :{"components" : ["attractorId", "life", 'rectParentId',"id"]}
}