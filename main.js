/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

function Make() {
  this.makeName = "subaru";
}


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
function Model() {
  this.modelName = "outback";
}

/*
Create a function, Model, to hold the 
corresponding property and value
*/

Model.prototype = new Make();

// What is the prototype of a Model?
function Car() {
  this.color = "color";
}


// Define a Car

Car.prototype = new Model();

console.log(Car());
// What is the prototype of a Car?
var tanCar = new Car();
tanCar.color = "tan";

var blueCar = new Car();
blueCar.color = "blue";

var redCar = new Car();
redCar.color = "red";

console.log(tanCar);
console.log(blueCar);
console.log(redCar);

// Create the first car


// Create the second car


// Create the third car
