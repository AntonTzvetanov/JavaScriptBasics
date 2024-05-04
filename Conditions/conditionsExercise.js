//задача 1 

function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);
    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }


}
sumSeconds(["14", "12", "10"]);

//задача 2
function bonusPoints(input) {
    let initialPoints = Number(input[0]);
    let bonusPoints = 0;

    if (initialPoints <= 100) {
        bonusPoints = 5;
    } else if (initialPoints <= 1000) {
        bonusPoints = initialPoints * 0.2;
    } else {
        bonusPoints = initialPoints * 0.1;
    }


    if (initialPoints % 2 === 0) {
        bonusPoints += 1; // += добавяне към стойноста, вместо да се презаписва и запазване на новата стойност
    } else if (initialPoints % 10 === 5) {
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    console.log(initialPoints + bonusPoints);

}
bonusPoints(["20"]);

//задача 4 

function toyStore(input) {

    let priceOfVacation = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let moneyEarned = (puzzels * 2.6) + (dolls * 3) + (teddyBears * 4.1) + (minions * 8.2) + (trucks * 2);
    let total = puzzels + dolls + teddyBears + minions + trucks;

    if (total >= 50) {
        moneyEarned *= 0.75;
    }

    moneyEarned *= 0.9;

    if (moneyEarned >= priceOfVacation) {
        let moneyLeft = moneyEarned - priceOfVacation;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = priceOfVacation - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyStore(["320", "8", "2", "5", "5", "1"]);


function godzilaVsKong(input) {


    let budget = Number(input[0]);
    let numActors = Number(input[1]);
    let costumePricePerActor = Number(input[2]);


    // Пресмятане на цената за декора (10% от бюджета)
    let decorCost = budget * 0.1;

    // Пресмятане на цената за облеклото на всички статисти
    let totalCostumeCost;
    if (numActors > 150) {
        // Ако статистите са повече от 150, има отстъпка от 10% за облеклото
        totalCostumeCost = numActors * costumePricePerActor * 0.9;
    } else {
        totalCostumeCost = numActors * costumePricePerActor;
    }

    // Обща цена за декор и облекло
    let totalCost = decorCost + totalCostumeCost;

    if (totalCost > budget) {
        // Ако парите са по-малко от бюджета
        let neededMoney = totalCost - budget;
        console.log(`Not enough money!\nWingard needs ${neededMoney.toFixed(2)} leva more.`);
    } else {
        // Ако парите са достатъчни или равни на бюджета
        let remainingMoney = budget - totalCost;
        console.log(`Action!\nWingard starts filming with ${remainingMoney.toFixed(2)} leva left.`);
    }
}

godzilaVsKong(["12", "186", "10"])


function worldSwimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distranceInMetters = Number(input[1]);
    let timeInSecondsForOneMetter = Number(input[2]);

    let totalSwimTime = distranceInMetters * timeInSecondsForOneMetter;
    let resistanceDelay = Math.floor(distranceInMetters / 15) * 12.5;

    totalSwimTime += resistanceDelay;

    if (totalSwimTime < recordInSeconds) {
        let newRecordTime = totalSwimTime.toFixed(2);
        console.log(`Yes, he succeeded! The new world record is ${newRecordTime} seconds.`);
    } else {
        let timeDifference = (totalSwimTime - recordInSeconds).toFixed(2);
        console.log(`No, he failed! He was ${timeDifference} seconds slower.`);
    }

}
worldSwimmingRecord(["10464", "1500", "20"])


function lunchTime(input) {

    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakDuration;
    let restTime = (1 / 4) * breakDuration;
    let totalWatchTime = breakDuration - lunchTime - restTime;

    if (totalWatchTime >= episodeDuration) {
        let timeLeft = totalWatchTime - episodeDuration;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`)

    } else {

        let timeNeeded = episodeDuration - totalWatchTime
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}

lunchTime(["Game of Thrones", "48", "60"]);


function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + 15; // взимаме часа и умножаваме по 60 за да обърнем в минути 
    let newHours = Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes % 60;
    if (newHours === 24) {
        newHours = 0;
    }

    if (newMinutes >= 10) {
        console.log(`${newHours}:${newMinutes}`);
    } else {

        console.log(`${newHours}:0${newMinutes}`)
    }

}
timePlus15Minutes(["23", "59"]);



function shopping(input) {

    let budgetOfPeter = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsPrice = 250; // цена за видеокарта
    let totalVideoCardsPrice = videoCards * videoCardsPrice; // сума за две видеокарти 500 лв. 

    let processorPrice = 0.35 * totalVideoCardsPrice; // 35%  от 500 = 175 лв. 

    let ramPrice = 0.10 * totalVideoCardsPrice //Тук взима само 50 лева !!! 
    let sumForRam = ram * ramPrice // сума за рам памет = 3* 50 = 150 лв.
    let sumForProcessors = processorPrice * processors;
    let totalPriceForAll = totalVideoCardsPrice + sumForProcessors + sumForRam; // total price 


    let disscountAmount = 0.15 * totalPriceForAll
    let disscountedPrice = 0;

    if (videoCards > processors) {

        disscountedPrice = totalPriceForAll - disscountAmount;
        totalPriceForAll = disscountedPrice;

    }


    if (budgetOfPeter >= totalPriceForAll) {
        let remainingBudged = budgetOfPeter - totalPriceForAll;
        console.log(`You have ${remainingBudged.toFixed(2)} leva left!`)
    } else {
        let neededBudged = totalPriceForAll - budgetOfPeter;
        console.log(`Not enough money! You need ${neededBudged.toFixed(2)} leva more!`);
    }
}
shopping(["924.37", "3", "1", "1"]);