(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function mapArray (array, callback, context) {
        const newArray = [];

        // add code for maping
        var i, temp;

        for (i=0; i < array.length; i++) {
			temp = callback.call(context, array[i], i, array);
			newArray.push(temp);
		}

        return newArray;
	};

	global.UAM.mapArray = mapArray;

}(window));

/*

Przykład użycia:

var arr = [1, 2, 3, 4, 5, 6];

var newArray = mapArray(arr, (arrElement, index, array) => {
	return arrElement + 2;
});

newArray; // [3, 4, 5, 6, 7, 8]

var values = {
	multiplyBy: 10;
};

var newArray2 = mapArray(arr, function (arrElement, index, array) {
	return arrElement * this.mutiplyBy;
}, values);

newArray2; [10, 20, 30, 40, 50, 60]
*/
