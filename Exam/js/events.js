window.addEventListener('DOMContentLoaded', function () {
	var cars = [];
	var addTCar = document.querySelector('#addCar');

	addCar.addEventListener('click', function() {
		var newCar = readCar();
		var template = getCarTemplate(newCar);
        var carDomElement = document.createElement('li');
        cars.push(newCar);
        carDomElement.innerHTML = template;
        carList.appendChild(carDomElement);


        var countCars = document.querySelector("#countCars");
	    countCars.textContent = "Wszystkie: " + document.querySelectorAll('li').length;


        //usuniecie wybranego elementu listy
			var deleteCar = carDomElement.querySelector('.deleteCar');
	    	deleteCar.addEventListener('click', function() {
		        var index = cars.indexOf(newCar);
		        
		        if (index >= 0) {
		        	cars.splice(index, 1);
		        }

		        carList.removeChild(carDomElement);
		        countCars.textContent = "Wszystkie: " + document.querySelectorAll('li').length;
	    	});
	});


});