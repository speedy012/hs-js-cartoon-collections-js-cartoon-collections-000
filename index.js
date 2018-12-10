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

// accept an array of planeteer calls
// capitalize new array 
// add exclamation point to the new Array

let array  = ["earth", "wind", "fire", "water", "heart"];

 function summonCaptainPlanet(array) {
	return array.map(function(ele) {
 		return ele.toUpperCase() + "!";
 	});
 }

// take in an array
// write a function to see if each element is longer than 4
// characters
// the return should be either false or true depending
// on the agruments

let words  = ["wind", 'earth', "fire", "water", "heart"];

function longPlaneteerCalls(words) {
  	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		} 
	}
  return false;
}

// take in an array 
// go through each string 
// when the first string matches one of the set variables
// return the cheese that matched one of the varaibles
// if not return "no cheese!"


function findTheCheese (foods) {
var cheese = ["camembert", "cheddar", "gouda", "swiss"];
	for(var i = 0; i < foods.length; i++) {
 		for(var j = i; j < cheese.length; j++){
 			if(foods[i] === cheese[j]) {
 				return cheese[j];
 			}
 		}
 	return "no cheese!";
 }
}

findTheCheese(['cheddar', 'apple', 'pineapple']) // cheddar
findTheCheese(['cheddar', 'gouda', 'cherry']) // cheddar

function startsWithB(words){
  var bwords = [];
  var words = ['bryan', 'cher', 'alice']
  for (var i =0; i < words.length; i++) {
    if (words[i].startsWith('b')  {
      console.log(bwords.push(words[i]
    )
  }
  return bwords
}



}
  
  
  
  

