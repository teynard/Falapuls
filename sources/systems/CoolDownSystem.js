var AttackSystem = 
{
	components : ["catchForces", "attackOne", "attackTwo", "attackThree"],
	method : function(catchForces, attackOne, attackTwo, attackThree)
	{
		catchForces.force+= 0.01;
		if(catchForces.force >= 5)
			catchForces.force = 5;
		else if(catchForces.force < 0)
			catchForces.force = 0;
		
		attackOne.count++;
		attackTwo.count++;
		attackThree.count++;
	}
}