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

    let moneyEarned = (puzzels * 2.6) + (dolls * 3) +  (teddyBears * 4.1) + (minions * 8.2) + (trucks * 2); 
    let total = puzzels + dolls + teddyBears + minions + trucks;

    if (total >= 50) {
        moneyEarned *= 0.75; 
    }

    moneyEarned *= 0.9; 

    if(moneyEarned >= priceOfVacation) { 
        let moneyLeft = moneyEarned - priceOfVacation;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = priceOfVacation - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyStore(["320","8","2","5","5","1"]);

