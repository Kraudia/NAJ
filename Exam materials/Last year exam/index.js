function getTask(task) {
    return  "<div class='task'>" +
            	"<input type='checkbox' class='checkbox'/>" + task +
            	"<button class='deleteTask'>x</button>"
            "</div>";
}



window.addEventListener('DOMContentLoaded', function () {
	var tasks = [];
	var addTask = document.querySelector('#addTask');

	addTask.addEventListener('keyup', function (e) {
	    if (e.keyCode == 13) {
	    	var newTask = addTask.value;
			var template = getTask(newTask);
			var taskDomElement = document.createElement('li');
	        taskDomElement.innerHTML = template;
	        tasks.push(newTask);
	        todoList.appendChild(taskDomElement);
	       	addTask.value = null; //czyszczenie pola input

	       	//usuniecie wybranego elementu listy
			var deleteTask = taskDomElement.querySelector('.deleteTask');
	    	deleteTask.addEventListener('click', function() {
	        var index = tasks.indexOf(newTask);
	        
	        if (index >= 0) {
	        	tasks.splice(index, 1);
	        }

	        todoList.removeChild(taskDomElement);
	    	});
	    }

	    console.log(document.querySelector("#checkbox"));
	    
	    var leftTasks = document.querySelector("#leftTasks");
	    leftTasks.textContent = document.querySelectorAll('input[type="checkbox"]:checked').length;
	});

});