function excellentResult(input) {
    let grade = Number(input[0]);
    if (grade >= 5.5) {
        console.log("Excellent!");
    }
}
excellentResult(["6"]);

function biggerNumber(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
biggerNumber(["5", ["3"]]);


function evenOrOdd(input) {

    let someNumber = Number(input[0]);
    if (someNumber % 2 === 0) { // модулно деление при което ако е четно то ще бъде нула 
        console.log("even");
    } else {
        console.log("odd");
    }

}
evenOrOdd(["122"]);

function passwordGues(input) {
    let password = input[0];
    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome")
    } else {
        console.log("Wrong password!");
    }

}

passwordGues(["s1cr3t!P@ssw0rd"]);

function areaOfFigures(input) {
    let type = input[0];
    let area = 0;

    if (type === "square") {
        let l = Number(input[1]);
        area = l * l;
        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
        console.log(area.toFixed(3));
    } else if (type === "circle") {
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r, 2);


    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = a * h / 2;

    }

    console.log(area.toFixed(3)); // fix to third symbol 
}
areaOfFigures(["circle", "6"]);

function speedInfo(input) {

    let speed = Number(input[0]);

    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }

}
speedInfo(["3500"]);


function numbersFrom100To200(input) {

    someNumber = Number(input[0]);

    if (someNumber < 100) {
        console.log("Less than 100");
    } else if (someNumber <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

numbersFrom100To200(["210"]);