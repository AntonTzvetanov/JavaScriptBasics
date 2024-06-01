function numsEndingIn7() {

    for (let i = 7; i <= 997; i++) {

        if (i % 10 === 7) {
            console.log(i);
        }

    }
}
numsEndingIn7();

function multiplicationTable(input) {
    let secondFactor = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let sum = i * secondFactor;
        console.log(`${i} * ${secondFactor} = ${sum}`);
    }
}
multiplicationTable(["5"]);

function Histogram(input) {
    // Вероятна задача за изпит
    let n = Number(input[0]);
    let procent1 = 0;
    let procent2 = 0;
    let procent3 = 0;
    let procent4 = 0;
    let procent5 = 0;

    for (let index = 1; index <= n; index++) {
        let num = Number(input[index]);

        if (num < 200) {
            procent1++
        } else if (num <= 399) {
            procent2++
        } else if (num <= 599) {
            procent3++
        } else if (num <= 799) {
            procent4++
        } else {
            procent5++
        }
    }

    let groupProcent1 = (procent1 / n) * 100;
    let groupProcent2 = (procent2 / n) * 100;
    let groupProcent3 = (procent3 / n) * 100;
    let groupProcent4 = (procent4 / n) * 100;
    let groupProcent5 = (procent5 / n) * 100;

    console.log(`${groupProcent1.toFixed(2)}%`);
    console.log(`${groupProcent2.toFixed(2)}%`);
    console.log(`${groupProcent3.toFixed(2)}%`);
    console.log(`${groupProcent4.toFixed(2)}%`);
    console.log(`${groupProcent5.toFixed(2)}%`);

}
Histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);

function smartLily(input) {

    // Вероятна задача за изпита! 
    let lilyAge = Number(input[0]);
    let priceForWasher = Number(input[1]);
    let priceFortoy = Number(input[2]);

    let oddBirthdaySum = 10;
    let moneySavedFromBirthdays = 0;

    for (let birthday = 1; birthday <= lilyAge; birthday++) {

        if (birthday % 2 === 0) {
            moneySavedFromBirthdays += oddBirthdaySum - 1; //тук братчето краде по левче 
            oddBirthdaySum += 10;
        } else {
            moneySavedFromBirthdays += priceFortoy;
        }
    }

    if (moneySavedFromBirthdays >= priceForWasher) {
        let leftSum = moneySavedFromBirthdays - priceForWasher;
        console.log(`Yes! ${leftSum.toFixed(2)} `)
    } else {
        let sumNeeded = priceForWasher - moneySavedFromBirthdays;
        console.log(`No! ${sumNeeded.toFixed(2)}`);
    }

}
smartLily(["10", "170.00", "6"]);

function tennisRanklist(input) {
    let turnamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let seasonPoints = 0;
    let winCount = 0;

    for (let index = 2; index < input.length; index++) {
        let result = input[index];

        if (result === "W") {
            seasonPoints += 2000;
            winCount++;
        } else if (result === "F") {
            seasonPoints += 1200;
        } else if (result === "SF") {
            seasonPoints += 720;
        }
    }

    let finalPoints = startingPoints + seasonPoints;
    console.log(`Final points: ${finalPoints}`);

    let averagePoints = seasonPoints / turnamentCount;
    console.log(`Average points: ${Math.floor(averagePoints)}`);

    let procentWon = (winCount / turnamentCount) * 100;
    console.log(`${procentWon.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);

function calculateActorPoints(input) {
    let index = 0;
    let actorName = input[index++];
    let academyPoints = Number(input[index++]);
    let numberOfEvaluators = Number(input[index++]);

    for (let i = 0; i < numberOfEvaluators; i++) {
        let evaluatorName = input[index++];
        let evaluatorPoints = Number(input[index++]);

        let pointsFromEvaluator = (evaluatorName.length * evaluatorPoints) / 2;
        academyPoints += pointsFromEvaluator;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    let neededPoints = 1250.5 - academyPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
}

// Примерен вход
calculateActorPoints(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);

function calculateClimberPercentages(input) {
    let index = 0;
    let numberOfGroups = Number(input[index++]);

    let musalaClimbers = 0;
    let montBlancClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
    let totalClimbers = 0;

    for (let i = 0; i < numberOfGroups; i++) {
        let groupSize = Number(input[index++]);
        totalClimbers += groupSize;

        if (groupSize <= 5) {
            musalaClimbers += groupSize;
        } else if (groupSize <= 12) {
            montBlancClimbers += groupSize;
        } else if (groupSize <= 25) {
            kilimanjaroClimbers += groupSize;
        } else if (groupSize <= 40) {
            k2Climbers += groupSize;
        } else {
            everestClimbers += groupSize;
        }
    }

    function calculatePercentage(climbers) {
        return ((climbers / totalClimbers) * 100).toFixed(2) + '%';
    }


    console.log(calculatePercentage(musalaClimbers));
    console.log(calculatePercentage(montBlancClimbers));
    console.log(calculatePercentage(kilimanjaroClimbers));
    console.log(calculatePercentage(k2Climbers));
    console.log(calculatePercentage(everestClimbers));
}

// Примерен вход
calculateClimberPercentages([
    "5",
    "25",
    "41",
    "31",
    "250",
    "6"
]);

function salary(input) {
    let index = 0;
    let numberOpenTabs = Number(input[index++]); // извличаме броя на отворените табове и увеличаваме индекса
    let salary = Number(input[index++]); // извличаме заплатата и увеличаваме индекса

    for (let i = 0; i < numberOpenTabs; i++) {
        let website = input[index++]; // извличаме уебсайта и увеличаваме индекса

        if (website === "Facebook") {
            salary -= 150;
        } else if (website === "Instagram") {
            salary -= 100;
        } else if (website === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) { // проверяваме дали заплатата е станала по-малка или равна на 0
            console.log(`You have lost your salary.`);
            return;
        }
    }

    console.log(Math.floor(salary)); // отпечатваме остатъка от заплатата като цяло число
}

salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"
]);
