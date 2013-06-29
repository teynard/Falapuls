var entitiesModels =
{
	rect :{"components" : [{"renderShape" : {"shape" : "square"}}, "position2d", "size2d"]},
	ball :{"components" : [{"renderShape" : {"shape" : "circle"}}, "position2d", "size2d", "velocity2d", "ballCenter"]},
	attractor :{"components" : [{"renderShape" : {"shape" : "circle"}}, "catchForces", "fromPlayer", "position2d", "size2d"]},
	cage :{"components" : ["cageArea", "position2d", "renderStroke", "size2d"]},
	pulse :{"components" : ["renderPulse", "position2d", "size2d"]}
}