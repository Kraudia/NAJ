	//var args = process.argv.slice(2);
	//console.log('Hello '+ args.join(', ') + '!');

//npm init -y
//npm install minimist --save


	// const minimist = require('minimist');
	// const args = minimist(process.argv.slice(2));

	// if (args.greeting === false) {
	// 	console.log('Shhh!');
	// } else {
	// 	let toGreet = args._;
	// 	let ignoreList = args.ignore || [];
	// 	toGreet = toGreet.filter(elem => ignoreList.indexOf(elem) === -1);

	// 	console.log('Hello '+ toGreet.join(', ') + '!');
	// }


	const minimist = require('minimist');
	const lib = require('./lib');
	const args = minimist(process.argv.slice(2));

	if (args.greeting === false) {
		console.log('Shhh!');
	} else {
		const toGreet = lib.extractGreeting(args);
		
		console.log('Hello '+ toGreet.join(', ') + '!');
	}
