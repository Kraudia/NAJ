class Task {
    private _text: string;
    private _isDone: boolean;
    private _element : HTMLElement;

    constructor(public text: string) {
        this._text = text;
    }

    markAsDone() : void {

    }

    getHtml() : HTMLElement {
        document.createElement(this._text);
    }
}

interface SearchTasks {
    search(query: string): Array<Task>;
}

class TaskList {
    private _element: HTMLElement;
    private _tasks: Array<Task>;

    constructor(element: HTMLElement) {
        this._element = element;
    }

    addTask(newTaskText: string) : Task {
        let task = new Task(newTaskText);
        this._element.appendChild(task.getHtml());
    }

    removeTask(taskToRemove: Task) : void {

    }
}

