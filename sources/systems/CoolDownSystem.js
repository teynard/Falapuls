var AttackSystem = 
{
	components : ["catchForces", "attackOne", "attackTwo", "attackThree"],
	method : function(catchForces, attackOne, attackTwo, attackThree)
	{
		catchForces.force+= 0.01;
		if(catchForces.force >= 5)
			catchForces.force = 5;
		
		attackOne.count++;
		attackTwo.count++;
		attackThree.count++;
	}
}