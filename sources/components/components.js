var componentsModels =
{
	cageArea : "return {restitution : 5}",

	ballCenter : "return {}",

	fromPlayer : "return {player : datas.player};",

	catchForces : "return {force : datas.force || 0, element : datas.element || 'neutre'};",

    position2d : "return {x : datas.x || 0, y : datas.y || 0};",

    size2d : "return {width : datas.width || 0, height : datas.height || 0, radius : datas.radius || 0};",

    renderShape : "return {color : datas.color || 0, shape : datas.shape || 0};",

    velocity2d : "return {x : datas.x || 0, y : datas.y || 0};",

    childs : "return { number : datas.childs || 0 };",

    positionId : " return { corner : datas.positionId || console.log('positionId est vide mec')};",

    // parent : "return { datas.parent || null};

    renderStroke : "return {color : datas.color || 0, shape : datas.shape || 0, weight : datas.weight || 0};",

    velocity2d : "return {x : datas.x || 0, y : datas.y || 0};"

}