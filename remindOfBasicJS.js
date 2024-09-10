function GreetingByName2(input) {

    let name = input[0];
    let greeting = "Hello, " + name + "!"

    console.log(greeting);
}

GreetingByName2(['Anton Tsvetanov']);

function concatenation(input) {

    let firstName = input[0];
    let lastName = input[1];

    let age = 36;

    let string = firstName + " " + lastName + " @ " + age
    console.log(string);

}

concatenation(['Anton', 'Dimitrov']);


function aritmeticCalculations(input) {

    let a = 5;
    let b = 7;

    let product = a * b;

    console.log(product);

    let i = a / 4;
    let f = parseInt(a / 4.0);
    let infinity = a / 0;

    let sqrt = Math.sqrt(-1);

    console.log(i);
    console.log(f);
    console.log(infinity);
    console.log(sqrt);

}

aritmeticCalculations();


function currencyConvertor(input) { 

let usd = Number(input[0]); 

let bgn = usd * 1.79549; 

console.log(bgn); 

}

currencyConvertor(['12.5']); 