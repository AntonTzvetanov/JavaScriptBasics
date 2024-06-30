function oneToTen() {

    for (let i = 1; i <= 10; i = i + 1) {
        console.log(i);
    }
}
oneToTen();

function printNumbersReverse(input) {

    let n = Number(input[0]);
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}
printNumbersReverse(["5"]);

function numbersBetweenThree(input) {

    let numberBetween3 = Number(input[0]);
    for (let i = 1; i <= numberBetween3; i += 3) {
        console.log(i)
    }
}
numbersBetweenThree(['175']);

function evenPowersOf2(input) {

    let randomNumber = Number(input[0]);
    let text = 'Mitko'

    for (let i = 0; i <= randomNumber; i += 2) {
        let result = Math.pow(2, i);

        console.log(result);

    }

}
evenPowersOf2(["7"]);


function characterSequence(input) {

    let text = input[0];

    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }

}
characterSequence(["SoftUni"])

function vowelSum(input) {

    let vowe = input[0];
    let sum = 0;

    for (let i = 0; i <= vowe.length; i++) {
        let char = vowe[i];

        switch (char) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break
        }
    }
    console.log(sum);
}
vowelSum(["Jokers"]);


function sumOfNumbers(input) { 

let numAsString = String(input[0]); 

let someSum = 0; 

for (let i= 0; i < numAsString.length; i++) {
    let num = Number(numAsString[i]); 
    
    someSum = someSum + num;
}
console.log(`The sum of the digits is:${someSum}`);

}
sumOfNumbers(["564891"]);


function numbersDivisibleBy9(input) { 

    let number1 = Number(input[0]); 
    let number2 = Number(input[1]); 
    let lastSum = 0; 
    let buffer = ""; 

    for (let i = number1; i <= number2; i++) {
     
       if( i % 9 === 0) { 
        lastSum += i; 
        buffer += i + "\n";
       }
        
    }
    console.log("The sum: " + lastSum);
    console.log(buffer);

}
numbersDivisibleBy9(["100","200"]); 