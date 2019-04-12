// hey this is an invisible comment.
var doCoolStuff = function () {
		var currentClassName = document.getElementById('cool').className;

		if (currentClassName == 'cool') {
			document.getElementById('cool').className = 'cool red';
		} else {
			document.getElementById('cool').className = 'cool';
		}

}
var sayMyName = function (name) {
	alert('My Name Is: '+name);
}

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
		],
	turnOn: function () {
		this.isTurnedOn = true;
		// body...
	} ,
	fly: function () {
		alert('fly');
		},
	switchcar: function (isOn) {
		console.log ('turn car ' +isOn)
		;
		if (isOn == true) {
		this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
		// body...
	}

};

console.log('Hello there friends!');