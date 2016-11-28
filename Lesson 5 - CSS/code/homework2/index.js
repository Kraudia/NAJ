window.addEventListener('DOMContentLoaded', function () {


	function getElementTemplate(el) {
	    return  "<li>" 
	    		+ el.element
	    		+ "<button class='removeElement'>-</button>"
	    		+ "</li>";
	}

	function readElement() {
	    var newElement = document.querySelector('#newElement');

	    if (!(newElement.value).length) {
	    	console.log("pusty");
	    	isInputEmpty = true;
	    } else isInputEmpty = false;

	    return {
	        element: newElement.value
	    };
	}

    var isInputEmpty = true;
	var elements = [];
	var elementList = document.querySelector('#elementList');
	var addElement = document.querySelector('#addElement');

	addElement.addEventListener('click', function() {
		var newElement = readElement();
		if (!isInputEmpty) {
			var template = getElementTemplate(newElement);
	        var elementDomElement = document.createElement('li');
	        elements.push(newElement);
	        elementDomElement.innerHTML = template;
	        elementList.appendChild(elementDomElement);

	       	//usuniecie wybranego elementu listy
			var removeElement = elementDomElement.querySelector('.removeElement');
		    removeElement.addEventListener('click', function() {
			    var index = elements.indexOf(newElement);
			        
			    if (index >= 0) {
			      	elements.splice(index, 1);
			    }

			    elementList.removeChild(elementDomElement);
		    });
		}
	});

});