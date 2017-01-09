// npm install express --save
// npm install body-parser --save

const express = require('express');
const bodyParser = require('body-parser');
const routers = {
	api: require('./routers/api'),
	auth: require('./routers/auth'),
}

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.post('/:id', (req, res) => {
	// req.body
});

app.set('config');

//app.use(routers.auth);
app.use('/api', routers.api);
//app.use(express.static(__dirname + '/public/'));
app.get('/', (req, res) => {
	res.send('Hello world for ' + JSON.stringify(req.user));
});

app.post('/', (req, res) => {

})
// app.put
// app.delete
// app.create

app.listen(8080, () => console.log('Server started on port 8080'));
						