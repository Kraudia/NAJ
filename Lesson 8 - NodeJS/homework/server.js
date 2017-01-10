// npm install express --save
// npm install body-parser --save
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const tasks = (require('./tasks.json'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/api/tasks', function (req, res) {
    res.status(200).send(tasks);
});

app.get('/api/tasks/:id', function (req, res) {
    res.status(200).send(tasks.find(function(task){
        return task.id == req.params.id;
    }));
});

app.post('/api/tasks', function (req, res) {
    //var id = Date.now();

    var newTask = {
        id: Date.now(),
        text: req.body.text,
        is_checked: false
    }

    tasks.push(newTask);
    res.status(201).send(`/api/tasks/${newTask.id}`);
});

app.delete('/api/tasks/:id', function(req, res){
    var objectDeleteIndex = tasks.findIndex(function(task){
        return task.id == req.params.id;
    });

    tasks.splice(objectDeleteIndex, 1);
    res.status(200).send();
});

app.patch('/api/tasks/:id', function(req, res){
    var objectIndex = tasks.findIndex(function(task){
        return task.id == req.params.id;
    });
    
    tasks[objectIndex].is_checked = req.body.is_checked;
    
    res.status(404).send()
});

app.listen(8080, function() {
    console.log('Server started on port 8080');
})