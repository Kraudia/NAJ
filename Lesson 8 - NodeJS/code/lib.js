function extractGreeting(args) {
	let toGreet = args._;
	let ignoreList = args.ignore || [];
	return toGreet.filter(elem => ignoreList.indexOf(elem) === -1);
}

module.exports = {
	extractGreeting: extractGreeting
}

