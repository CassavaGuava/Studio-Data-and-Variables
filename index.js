// FORK this starter file and save it to your own Repl.it account.

//D0NE

// add the readline-sync on top becuase JS reads from top to bottom. since the astronaut number may change before the program runs

const input = require('readline-sync');

let astronautCount = Number(input.question('Control... What is the updated astronaut count? '))

// Declare and initialize the 12 variables here:



let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
//let astronautCount = 7; 
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg =  760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelcius = -225;
let fuelLevel = 100;
let weatherStatus = 'clear';

let dashedLine = "---------------------------------------";

// Write code to generate the LC04 report here:

// "\n" is a new line formula to concatenate header and add a new line

console.log(dashedLine + "\n" +
  "> LC04 - LAUNCH CHECKLIST" + "\n" + 
  dashedLine + "\n" +
  'Date: ' + date + "\n" +
  'Time: ' + time);

//better way of doing a new line of code while keeping it within the console.log ie - do the "\n".

console.log("---------------------------------------")
console.log("> ASTRONAUT INFO")
console.log("---------------------------------------")

console.log('* count: '+ astronautCount);
console.log('* status: '+ astronautStatus);

console.log('---------------------------------------')
console.log('> FUEL DATA')
console.log('---------------------------------------')

console.log('* Fuel temp celcius: ' + fuelTempCelcius)
console.log('* Fuel level: ' + fuelLevel)


console.log("---------------------------------------")
console.log("> MASS DATA")
console.log("---------------------------------------")

console.log('* Crew mass: '+ crewMassKg);
console.log('* Fuel mass: '+ fuelMassKg)
console.log('* Shuttle mass: '+ shuttleMassKg)
console.log('* Total mass: ') + totalMassKg


console.log("---------------------------------------")
console.log("> FLIGHT PLAN")
console.log("---------------------------------------")

console.log('* weather: ' + weatherStatus)


console.log("---------------------------------------")
console.log("> OVERALL STATUS")
console.log("---------------------------------------")

console.log("* Clear for takeoff: Yes")

// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.

