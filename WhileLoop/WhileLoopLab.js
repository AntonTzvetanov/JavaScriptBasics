function readText(input) {
    let index = 0;
    while (true) {
        let str = input[index];
        index++;
        if (str === "Stop") {
            break;
        }
        console.log(str);
    }

}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "Paris"]);


function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    while (data !== password) {
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);


function sumNumbers(input) {

    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < n) {
        let currentSum = Number(input[index]);
        sum += currentSum;
        index++
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);

function sequence(input) {
    let number = Number(input[0]);
    let k = 1;
    while (k <= number) {
        console.log(k);
        k = k * 2 + 1;
    }
}
sequence(["31"]);


function graduation(input) {

    let index = 0;
    let name = input[index];
    index++

    let clas = 1;
    let sumGrade = 0;
    let badGradeCount = 0;

    let isExcluded = false;

    while (clas <= 12) {

        let grade = Number(input[index]);
        index++

        if (grade < 4.00) {
            badGradeCount++;
            if (badGradeCount === 2) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${clas} grade`);
                break;
            }
            continue;
        }

        sumGrade += grade;
        clas++;

    }

    if (!isExcluded) {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
    }


}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);


function bankBallance(input) {

    let deposit = input[0];
    let balance = 0;
    let index = 1;

    while (deposit !== "NoMoreMoney") {

        let amount = Number(deposit);

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance = balance + amount;
        console.log(`Increase: ${amount.toFixed(2)}`);;
        deposit = input[index];
        index++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}
bankBallance(["5.51", "69.42", "100", "NoMoreMoney"]);


function maxNumber(input) {

    let index = 0;
    let command = input[index];
    index++
    biggestNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (num > biggestNum) {
            biggestNum = num;
        }

        command = input[index];
        index++;
    }
    console.log(biggestNum);


}
maxNumber((["-1", "-2", "Stop"]));

function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++
    lowlestNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (num < lowlestNumber) {
            lowlestNumber = num;
        }

        command = input[index];
        index++;
    }
    console.log(lowlestNumber);
}
minNumber(["-1",
    "-2",
    "Stop"
])