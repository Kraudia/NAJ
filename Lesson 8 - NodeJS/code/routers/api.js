var express = require('express');
var router = express.Router();

//const database = []
//router.create('/task', () => {database.push()})

router.get('/entity:id', (req, res) => {
	//res.send('hey, it works!');
	res.send('Info for ' + req.params.entity + ' id=' + req.params.id);
});

router.post('/test', (req, res) => {
	console.log(req.body);
	res.status(200).send();
});

module.exports = router;