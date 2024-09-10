function moving(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let hight = Number(input[2]);

    let apartmentVolume = width * lenght * hight;

    let index = 3;
    let currentRow = input[index];

    while (currentRow !== "Done") {

        let boxes = Number(currentRow);

        apartmentVolume -= boxes;

        if (apartmentVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(apartmentVolume)} Cubic meters more.`);
            break;
        }

        index++;
        currentRow = input[index];
    }

    if (apartmentVolume > 0) {
        console.log(`${apartmentVolume} Cubic meters left.`);
    }


}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);


function cake(input) {


    let widthCake = Number(input[0]);
    let lenghtCake = Number(input[1]);

    let cakeVolume = widthCake * lenghtCake;

    let index = 2
    let row = input[index];

    while (row !== "STOP") {

        let pieces = Number(row);

        cakeVolume -= pieces;

        if (cakeVolume <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeVolume)} pieces more.`);
            break;
        }
        index++
        row = input[index];
    }

    if (cakeVolume > 0) {
        console.log(`${cakeVolume} pieces are left.`);
    }


}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);

function coins(input) {

    let change = Number(input[0]);
    let changeInCoins = Math.floor(change * 100);
    let coinsCounter = 0;

    while (changeInCoins > 0) {

        if (changeInCoins >= 200) {
            changeInCoins -= 200
        } else if (changeInCoins >= 100) {
            changeInCoins -= 100;
        } else if (changeInCoins >= 50) {
            changeInCoins -= 50;
        } else if (changeInCoins >= 20) {
            changeInCoins -= 20;
        } else if (changeInCoins >= 10) {
            changeInCoins -= 10;
        } else if (changeInCoins >= 5) {
            changeInCoins -= 5;
        } else if (changeInCoins >= 2) {
            changeInCoins -= 2;
        } else if (changeInCoins >= 1) {
            changeInCoins -= 1;
        }
        coinsCounter++;
    }
    console.log((coinsCounter));

}
coins(["1.23"]);

function oldLibrary(input) {

    let favoriteBook = input[0];
    let index = 1;
    let bookFound = false;
    let nextBookName = input[index];

    while (nextBookName !== "No More Books") {

        if (nextBookName === favoriteBook) {
            bookFound = true;
            break;
        }
        index++
        nextBookName = input[index];
    }

    if (bookFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index -1} books.`);
    } else {
        console.log(`You checked ${index -1} books and found it.`);
    }
}

oldLibrary(["Troy", "Stronger", "Life Style", "No More Books"]);


function steps(input) {


    let targetSteps = 10000;
    let stepsSum = 0;
    let index = 0;

    let row = input[index];

    while (row !== "Going home") {
        let steps = Number(row);
        stepsSum += steps;

        if (stepsSum >= targetSteps) {
            console.log(`Goal reached! Good job!\n${stepsSum - targetSteps} steps over the goal!`);
            break;
        }
        index++;
        row = input[index];
    }

    if (row === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        stepsSum += stepsToHome;

        if (stepsSum >= targetSteps) {
            console.log(`Goal reached! Good job!\n${stepsSum - targetSteps} steps over the goal!`);
        } else {
            console.log(`${targetSteps - stepsSum} more steps to reach goal.`);
        }

    }

}
steps(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
])


function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let currentRow = input[index];

    let spendDays = 0;
    let days = 0;

    while (availableMoney < moneyNeeded) {
        days++;

        if (currentRow === "spend") {
            spendDays++;

            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }

            index++;
            let moneySpent = Number(input[index]);
            availableMoney -= moneySpent;
            if (availableMoney < 0) {
                availableMoney = 0;
            }

        } else if (currentRow === "save") {
            spendDays = 0;
            index++;

            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
        }
        index++;
        currentRow = input[index];
    }

    if (availableMoney >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
])

function solveExamProblems(input) {
    let allowedPoorGrades = Number(input[0]);
    let index = 1;
    let poorGradesCount = 0;
    let totalGrades = 0;
    let problemsCount = 0;
    let lastProblem = '';
    let sumGrades = 0;

    while (index < input.length) {
        let problemName = input[index];

        if (problemName === "Enough") {
            let averageScore = sumGrades / totalGrades;
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${problemsCount}`);
            console.log(`Last problem: ${lastProblem}`);
            return;
        }

        let grade = Number(input[index + 1]);
        problemsCount++;
        totalGrades++;
        sumGrades += grade;
        lastProblem = problemName;

        if (grade <= 4) {
            poorGradesCount++;
            if (poorGradesCount === allowedPoorGrades) {
                console.log(`You need a break, ${poorGradesCount} poor grades.`);
                return;
            }
        }

        index += 2;
    }
}


solveExamProblems(["3", "Math", "5", "Science", "3", "History", "4", "Enough"]);