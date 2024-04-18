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


const schedule = ['Wake up', 'Eat', 'Learn', 'Code'] ;  //variable as array. We can add var, const, boolean... Each array starts from zero (0)
console.log(schedule); 

// acsess each variable one by one 
schedule[0];
console.log(schedule[0]); 

//add more variables in the array 
schedule.push('A new thing god added')
console.log(schedule); 

//remove the last added variable 
schedule.pop();
console.log(schedule); 

//remove the first in line variable 
schedule.shift();
console.log(schedule); 

//add a new one var at the begining 
schedule.unshift("a new one")
console.log(schedule); 

//access by index 
console.log(schedule.indexOf('Eat')); 

const course = schedule.indexOf('Learn');
console.log(course);
console.log (schedule[course]);

//create a object 

const user = {
    // properties with different values 
    firstName :"Mitko",
    personAge : 24,
    married: true, 
    purchases: ["phone","car","laptop"]
};

// let's get the purchases that Mitko's has 
console.log(user.purchases);


//THIS 
console.log(this); //it will show all the windows functions of THIS 

const newUser = {
    // properties with different values 
    firstName :"Mitko",
    personAge : 24,
    married: true, 
    purchases: ["phone","car","laptop"],
    sayName: function() {
        console.log(this.firstName);
    }

};

newUser.sayName();



