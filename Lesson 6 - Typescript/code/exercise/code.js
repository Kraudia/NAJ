var Task = (function () {
    function Task(text) {
        this.text = text;
        this._text = text;
    }
    Task.prototype.markAsDone = function () {
    };
    Task.prototype.getHtml = function () {
        document.createElement(this._text);
    };
    return Task;
}());
var TaskList = (function () {
    function TaskList(element) {
        this._element = element;
    }
    TaskList.prototype.addTask = function (newTaskText) {
        var task = new Task(newTaskText);
        this._element.appendChild(task.getHtml());
    };
    TaskList.prototype.removeTask = function (taskToRemove) {
    };
    return TaskList;
}());
