// function should take an array
// return a string with the numbered dwarves


var dwarves = ['Sleepy', 'Grumpy', 'Doc', 'Dopey', 'Bashful', 'Happy', 'Sneezy'];

function dwarfRollCall(dwarves) {
  var newStr = "";
  dwarves.forEach(function(name, idx) {
  newStr += (idx+1 + ". " + name + " ");
  });
  return newStr;
}

//accept an array of planeteer calls
//
let array  = ["earth", "wind", "fire", "water", "heart"];

 function summonCaptainPlanet(array) {
	return array.map(function(ele) {
 		return ele.toUpperCase() + "!";
 	});
 }
/*function summonCaptainPlanet(planeteerCalls){
 for (let i = 0; i < stock.length; i++) {
 stock[i] = stock[i].toUpperCase();
}
}*/



function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
