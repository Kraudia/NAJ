(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function addManyValues () {
        let sum = 0;
		for (let i = 0; i < arguments.length; i++) {
	    	sum += arguments[i];
		}
        
        return (...param) => {	
        	for (let j = 0; j < param.length; j++) {
	    	sum += param[j];
		}

		//param.forEach(item => sum += item);

		return sum;
        };
	};

	global.UAM.addManyValues = addManyValues;

}(window));

/*

Przykład użycia:

var addRest = UAM.addManyValues(2, 3);

addRest(1, 1, 3); // 10
addRest(3, 3); // 11
addRest(1, 1, 1, 1, 1); //10

var addOther = UAM.addManyValues(0, 10, 10);
addOther(10); // 30

*/
