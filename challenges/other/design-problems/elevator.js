/*
UNFINISHED
*/


/* Elevator Implementation */
function Building(numFloors) {
	this.numFloors = numFloors;
	this.callElevator = callElevator;
	this.selectFloor = selectFloor;
}

function callElevator(currFloor, dir) {

}

function selectFloor(floor){

}


/* Elevator Implementation */
function Elevator() {
	this.currFloor = currFloor;
	this.moveUp = moveUp;
	this.moveDown = moveDown;
	this.printPassEnter = printPassEnter;
	this.printPassExit = printPassExit;
}

function moveUp(destFloor) {

}

function moveDown(destFloor) {

}

function printPassEnter(currFloor) {

}

function printPassExit(currFloor) {

}

/* Helper Function */
function createRandPassenger(numFloors) {
	let passengerList = ["Santina Kidwell", "Reatha Cirillo", "Layne Nicolas", "Michelina Papineau", "Sharen Drury", "Janean Derrow", "Kyra Fullbright", "Domitila Yutzy", "Hye Bosio", "Charita Schoenrock", "Karly Leonard", "Caridad Cuthbertson", "Earnestine Ettinger", "Vernon Tsan", "Akiko Rustad", "Sudie Ethier", "Kiera Rempel", "Criselda Joe", "Lelah Oniel", "Adrian Kilday", "Vivienne Bermudez", "Lilian Torchia", "Queen Pennywell", "Jennell Binion", "Ahmad Casebolt", "Delaine Albertson", "Thomas Bedsole", "Malka Navarrete", "Jackelyn Sieben", "Lucretia Hosey", "Zenaida Mcgeehan", "Jolynn Sabat", "Bernard Gleaton", "Dalia Hutsell", "Miriam Beamer", "Molly Bacote", "Patrica Ringgold", "Alecia Spady", "Latricia Inks", "Roger Faas", "Randi Santillanes", "Marcell Miura", "Milo Shiflett", "Rodolfo Stich", "Sabra Ryckman", "Ermelinda Vangilder", "Vivan Holsapple", "Barbra Spainhour", "Leonida Selvy", "Windy Ralph"];
	let passengerName = passengerList[Math.floor(Math.random() * (passengerList.length - 1))];
	let currFloor = Math.floor(Math.random() * (numFloors));
	let chosenDir = Math.random() < 0.5 ? 'up' : 'down';

	return {
		name: passengerName,
		floor: currFloor,
		direction: chosenDir
	};
}

function selectRandFloor(currFloor, dir) {

}

function runElevator(numFloors, numPassengers) {

	let building = new Building(numFloors);
	//passenger list
	let passengerQueue = [];

	// create passenger list using createRandPassenger
	for (let i = 0; i < numPassengers; i++) {
		passengerQueue.push(createRandPassenger(numFloors));
	}

	for (let i = 0; i < passengerQueue.length; i++) {

	}

}

console.log(runElevator(10, 10));