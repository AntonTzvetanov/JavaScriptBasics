function number() {
  let myNumber = 1;
  console.log(myNumber);
}
number();

function massive() {
  let array = ["test", "Mitko", 20, "Sofia"];
  console.table(array);
  console.log(array[0]);
}
massive();

function GreetingByName(input) {
  let name = input[0];

  console.log("Hello, " + name + "!");
}

GreetingByName(["Nakov"]);

function printNumber() {

    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);

}
printNumber();

function concatenateData(input) {

let firstName = input[0];
let lastName = input[1];
let age = Number(input[2]);
let town = input[3];

console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(["Anton","Tsvetanov",30,"Sofia"]);

function squareArea(input) {
  let a = Number(input[0]);
  let area = a * a;
  console.log(area);
}
squareArea("10");

function theProject(input) {
let architectName = [0];
let hours= Number(input[1]);
let projects = Number(input[2]);
console.log(`The architect ${architectName} will need ${hours} hours to complete ${projects} project/s.`);

}

theProject (["Anton","10","4"]);

function theProject2(input) {
  let architectName = input[0]; 
  let hours = 3 * Number(input[1]); 
  let projects = Number(input[1]); 

  console.log(`The architect ${architectName} will need ${hours} hours to complete ${projects} project/s.`);
}


let input = ['Anton', '5']; 
theProject2(input); 

function theZoo(input) {

  let dogFood = 2.50 * Number(input[0]);
  let catFood = 4 * Number(input[1]);
  let totalAmount = dogFood + catFood;
  console.log (`${totalAmount} lv`);

}
theZoo(["13","9"]);

function calculateLandscapingCost(input) {

  let squareMeters = Number(input[0]);

  
  let pricePerSquareMeterWithVAT = 7.61;

  let totalPrice = squareMeters * pricePerSquareMeterWithVAT;

  let discount = 0.18 * totalPrice;

  let finalPrice = totalPrice - discount;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}


calculateLandscapingCost(['550']);
calculateLandscapingCost(['150']); 

