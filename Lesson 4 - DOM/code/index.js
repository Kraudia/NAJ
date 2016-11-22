var btnEl = document.querySelector('#btn'),
	box2El = document.querySelector('#box2');
	ulEl = document.querySelector('ul');

/**
box2El.addEventListener('click', function() {
	console.log('Naciśnięto box2');
});

btnEl.addEventListener('click', function() {
	console.log('Naciśnięto przycisk');
});

box2El.addEventListener('click', function(event) {
	console.log('Naciśnięto box2 - faza capture');
	event.stopPropagation();
}, true);
**/

function klikniecielementulisty() {
	console.log('element klikniety');
}

btn.addEventListener('click', function() {
	var liEl = document.createElement('li');
	liEl.textContent = ' nowy element';
	ulEl.appendChild(liEl);
});

ulEl.addEventListener('click', function(event) {
	if (event.target.tagName == 'LI') {
		klikniecielementulisty();
	}
});