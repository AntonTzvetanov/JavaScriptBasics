const myName = "Anton";
const chanel = "youtube";

function toUpper(text) {
    const upperCased = text.toUpperCase();
 console.log(upperCased)
}

toUpper(myName);
toUpper(chanel);

const myAge = 35;
const yourAge = 31; 
console.log(myAge + yourAge);
console.log("Hello my name is " + "Anton"); // concatenation 

console.log(`My name is ${myName}`); // concatenation with using const 

console.log (`My name is ${myName} and my age is ${myAge}`); //тези кавички се намират над ТАБ клавиша

const combined = myName + myAge; 
console.log (combined);

const someAge = 16; // if and else statement

if(someAge > 18) { 
   console.log ("You are good to go");
 }
  else if(someAge <15 ) {
    console.log ("you are realy young")
 } 
 

else {
    console.log("You are a kid");
}

const dice1 = 6;
const dice2 = 6; 

if(dice1 ===6 && dice2 ===6) {
    console.log("You roled double");
} else {
    console.log("You didn't row double");
}





