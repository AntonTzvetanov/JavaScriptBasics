function trainTheTrainers(input) {

    let judgeCount = Number(input[0]);
    let index = 1;
    let command = input[index];

    let totalGradeSum = 0;
    let totalGreatCount = 0;

    while (command !== "Finish") {

        let nameOfPresentation = command;
        let presentationGradeSum = 0;

        for (let currentJudgeNumber = 1; currentJudgeNumber <= judgeCount; currentJudgeNumber++) {

            index++;
            let currentGrade = Number(input[index]);
            presentationGradeSum += currentGrade;
        }

        let avvPresentationGrade = presentationGradeSum / judgeCount;
        console.log(`${nameOfPresentation} - ${avvPresentationGrade.toFixed(2)}.`);

        totalGradeSum += avvPresentationGrade;
        totalGreatCount++; // Тази променлива следва да се увеличава тук вместо totalGradeSum
        index++; // Увеличаваме index тук за да преминем към следващата презентация
        command = input[index]; // Актуализираме стойността на командата
    }

    let totalAvarageGrade = totalGradeSum / totalGreatCount;
    console.log(`Student's final assessment is ${totalAvarageGrade.toFixed(2)}.`);
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);


function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    while (command !== "Finish") {

        let movieName = command;
        index++;
        let totalSeatsCount = Number(input[index]);
        let takenSeatCount = 0;

        index++;
        let command1 = input[index];

        while (command1 !== "End") {

            let ticketsType = command1;

            if (ticketsType === "student") {
                studentTicketCount++;
            } else if (ticketsType === "standard") {
                standardTicketCount++;
            } else if (ticketsType === "kid") {
                kidTicketCount++;
            }

            takenSeatCount++;

            if (takenSeatCount === totalSeatsCount) {
                break;
            }

            index++;
            command1 = input[index];

            if (command1 === "Finish") {
                break;
            }
        }

        let takenSeatPercent = takenSeatCount / totalSeatsCount * 100;
        console.log(`${movieName} - ${takenSeatPercent.toFixed(2)}% full.`);
        index++;
        command = input[index];
    }

    let totalTicketCount = studentTicketCount + standardTicketCount + kidTicketCount;
    console.log(`Total tickets: ${totalTicketCount}`);

    let studentTicketPercent = studentTicketCount / totalTicketCount * 100;
    let standardTicketPercent = standardTicketCount / totalTicketCount * 100;
    let kidTicketPercent = kidTicketCount / totalTicketCount * 100;

    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student",
    "student",
    "Finish"
]);




function equalSumEvenOrOddPositions(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let results = '';

    for (let currentNumber = startNum; currentNumber <= endNum; currentNumber++) {

        let evenIndexSum = 0;
        let oddIndexSum = 0;

        let currentNumToString = String(currentNumber);

        for (let i = 0; i < currentNumToString.length; i++) { // Поправка на условието на цикъла

            let currentDigit = Number(currentNumToString[i]); // Поправка за правилното извличане на цифрата

            if (i % 2 === 0) {
                evenIndexSum += currentDigit;
            } else {
                oddIndexSum += currentDigit;
            }

        }

        if (evenIndexSum === oddIndexSum) {
            results += currentNumToString + ' ';
        }

    }

    console.log(results);
}

equalSumEvenOrOddPositions(["100000", "100050"]);


function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {

        let currentNumber = Number(command);
        let isPrime = true;

        if (currentNumber < 0) {
            console.log(`Number is negative.`);
            index++; // Трябва да увеличим индекса тук, за да не зациклим
            command = input[index];
            continue;
        }

        if (currentNumber === 1) {
            isPrime = false;
        } else {
            for (let divisor = 2; divisor <= Math.sqrt(currentNumber); divisor++) { // Поправка в цикъла
                if (currentNumber % divisor === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            sumPrime += currentNumber;
        } else {
            sumNonPrime += currentNumber;
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"
])


function pyramidOfNumbers(input) {

    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++) {

        for (let cols = 1; cols <= rows; cols++) {

            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;

        }
        console.log(printCurrentLine.trim()); 
        printCurrentLine = "";
        if (isBigger) {
            break;
        }

    }

}
pyramidOfNumbers(["15"]);

function specialNumbers(input) {
    let n = Number(input[0]);
    let result = "";

    for (let num = 1111; num <= 9999; num++) {
        let isSpecial = true;
        let numStr = num.toString();

        for (let i = 0; i < numStr.length; i++) {
            let digit = Number(numStr[i]);

            if (digit === 0 || n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result += num + " ";
        }
    }

    console.log(result.trim());
}

specialNumbers(["16"]);
