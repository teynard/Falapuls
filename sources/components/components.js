var componentsModels =
{
    attackOne : "return {force : datas.force || 1, coolDown : datas.coolDown || 1, count : datas.count || 1}",

    attackTwo : "return {force : datas.force || 2, coolDown : datas.coolDown || 2, count : datas.count || 2}",

    attackThree : "return {force : datas.force || 3, coolDown : datas.coolDown || 3, count : datas.count || 3}",

	cageArea : "return {restitution : 5}",

	ballCenter : "return {}",

	colliderCage : "return {}",

	fromPlayer : "return {player : datas.player};",

	catchForces : "return {force : datas.force || 0, element : datas.element || 'neutre'};",

    position2d : "return {x : datas.x || 0, y : datas.y || 0};",

    size2d : "return {width : datas.width || 0, height : datas.height || 0, radius : datas.radius || 0};",

    renderShape : "return {color : datas.color || 0, shape : datas.shape || 0};",

    velocity2d : "return {x : datas.x || 0, y : datas.y || 0};",

    childs : "return { number : datas.number || 0 };",

    positionId : " return { corner : datas.corner || console.log('positionId de '+entity)};",

    parent : "return { number : datas.number || null};",

    renderStroke : "return {color : datas.color || 0, shape : datas.shape || 0, weight : datas.weight || 0};",

    renderPulse : "return {color : datas.color || 0, buffer : datas.buffer, compteur : datas.compteur, entity : entity };",
}