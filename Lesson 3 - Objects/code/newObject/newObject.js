(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor, ...args) {
		let obj = {};
		obj.__proto__ = constructor.prototype;
		//Object.create(constructor.prototype);


		let result = constructor.apply(obj, args);
		if (result) {
			return result;
		}
		
		return obj;
	}

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


