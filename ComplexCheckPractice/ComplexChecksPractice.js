function cinema(input) {

    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let tickets = rows * cols;
    let income = 0;

    if (projectionType === "Premiere") {
        income = tickets * 12;

    } else if (projectionType === "Normal") {
        income = tickets * 7.5;
    } else if (projectionType === "Discount") {
        income = tickets * 5;
    }

    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Premiere", "10", "12"]);


function summerDress(input) {

    let temperature = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit;
    let shoes;

    switch (timeOfTheDay) {
        case "Morning":
            if (temperature <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;

        case "Afternoon":
            if (temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals"
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;

        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
}
summerDress(["28", "Evening"]);


function fishBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFisherman = Number(input[2]);
    let shipPrice = 0;

    switch (season) {
        case "Spring":
            shipPrice = 3000;
            break;
        case "Summer":

        case "Autumn":
            shipPrice = 4200;
            break;
        case "Winter":
            shipPrice = 2600;
            break;
    }

    if (numberOfFisherman <= 6) {
        shipPrice = shipPrice * 0.9;
    } else if (numberOfFisherman <= 11) {
        shipPrice = shipPrice * 0.85;
    } else {
        shipPrice = shipPrice * 0.75;
    }

    if (numberOfFisherman % 2 === 0 && season !== "Autumn") {
        shipPrice = shipPrice * 0.95;
    }

    if (budget >= shipPrice) {
        let moneyLeft = budget - shipPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = shipPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }

}
fishBoat(["3000", "Summer", "11"]);

function newHouse(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budgedForFlowers = Number(input[2]);
    let priceForFlower = 0;

    switch (flowerType) {
        case "Roses":
            priceForFlower = flowerCount * 5;
            break;
        case "Dahlias":
            priceForFlower = flowerCount * 3.80;
            break;
        case "Tulips":
            priceForFlower = flowerCount * 2.80;
            break;
        case "Narcissus":
            priceForFlower = flowerCount * 3;
            break;
        case "Gladiolus":
            priceForFlower = flowerCount * 2.50;
            break;
    }

    if (flowerCount > 80 && flowerType === "Roses") {
        priceForFlower *= 0.9;
    } else if (flowerCount > 90 && flowerType === "Dahlias") {
        priceForFlower *= 0.85;
    } else if (flowerCount > 80 && flowerType === "Tulips") {
        priceForFlower *= 0.85;
    } else if (flowerCount < 120 && flowerType === "Narcissus") {
        priceForFlower *= 1.15;
    } else if (flowerCount < 80 && flowerType === "Gladiolus") {
        priceForFlower *= 1.2;
    }

    if (budgedForFlowers >= priceForFlower) {
        let leftSumForFlowersLeft = budgedForFlowers - priceForFlower;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftSumForFlowersLeft.toFixed(2)} leva left.`)
    } else {
        let neededSumForFlowers = priceForFlower - budgedForFlowers;
        console.log(`Not enough money, you need ${neededSumForFlowers.toFixed(2)} leva more.`)
    }
}

newHouse(["Narcissus", "119", "360"]);


function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = nights * 50;
            apartmentPrice = nights * 65;
            if (nights > 14) {
                studioPrice *= 0.7;
            } else if (nights > 7) {
                studioPrice *= 0.95;
            }
            break;
        case "June":
        case "September":
            studioPrice = nights * 75.2;
            apartmentPrice = nights * 68.7;
            if (nights > 14) {
                studioPrice *= 0.8;
            }
            break;
        case "July":
        case "August":
            studioPrice = nights * 76;
            apartmentPrice = nights * 77;
            break;

    }

    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
hotelRoom(["August", "20"]);


function skiHoliday(input) {

    let dayStay = Number(input[0]);
    let spaceType = input[1];
    let feedback = input[2];

    let nightCount = dayStay - 1;
    let priceForNight = 0;

    switch (spaceType) {
        case "room for one person":
            priceForNight = nightCount * 18;
            break;
        case "apartment":
            priceForNight = nightCount * 25;
            if (nightCount < 10) {
                priceForNight *= 0.7;
            } else if (nightCount < 10 || nightCount <= 15) {
                priceForNight *= 0.65;
            } else if (nightCount > 15) {
                priceForNight *= 0.50;
            }
            break;
        case "president apartment":
            priceForNight = nightCount * 35;
            if (nightCount < 10) {
                priceForNight *= 0.9;
            } else if (priceForNight < 10 || priceForNight <= 15) {
                priceForNight *= 0.85;
            } else if (nightCount > 15) {
                priceForNight *= 0.8;
            }
            break;

    }
    if (feedback === "positive") {
        priceForNight *= 1.25;
        console.log(priceForNight.toFixed(2));
    } else {
        priceForNight *= 0.9;
        console.log(priceForNight.toFixed(2));
    }
}
skiHoliday(["2", "apartment", "positive"]);

function operationsBetweenNumbers(input) { // need to check why I get 90 of 100 from the Judge :()

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = "";

    switch (operator) {

        case "+":
            result = num1 + num2;
            if (evenOrOdd % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = " odd";
            }
            console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = " odd";
            }
            console.log(`${num1} - ${num2} = ${result} -${evenOrOdd}`);

            break;
        case "*":

            result = num1 * num2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = " odd";
            }
            console.log(`${num1} * ${num2} = ${result} -${evenOrOdd}`);

            break;
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            }

            break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`)
            } else if (result % 2 === 0) {
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`);
            }
            break;
    }
}
operationsBetweenNumbers(["3", "7", "*"]);

function vacationPlanner(input) {
    let budgetForVacation = Number(input[0]);
    let seasonForVacation = input[1];
    let destination = "";
    let accommodation = "";
    let cost = 0;


    if (budgetForVacation <= 100) {
        destination = "Bulgaria";
        if (seasonForVacation === "summer") {
            accommodation = "Camp";
            cost = budgetForVacation * 0.30;
        } else if (seasonForVacation === "winter") {
            accommodation = "Hotel";
            cost = budgetForVacation * 0.70;
        }
    } else if (budgetForVacation <= 1000) {
        destination = "Balkans";
        if (seasonForVacation === "summer") {
            accommodation = "Camp";
            cost = budgetForVacation * 0.40;
        } else if (seasonForVacation === "winter") {
            accommodation = "Hotel";
            cost = budgetForVacation * 0.80;
        }
    } else {
        destination = "Europe";
        accommodation = "Hotel";
        cost = budgetForVacation * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${cost.toFixed(2)}`);
}
vacationPlanner(["1500", "summer"]);

function exam(input) {

    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let hourOfArriving = Number(input[2]);
    let minutesOfArriving = Number(input[3]);

    let examTime = hourOfExam * 60 + minutesOfExam;
    let arrivingTime = hourOfArriving * 60 + minutesOfArriving;
    let difference = arrivingTime - examTime;

       let absDifference = Math.abs(difference);
       let hoursForExam = Math.floor(absDifference / 60);
       let minutes = absDifference % 60;
       
    if (difference > 0) {
        console.log("Late")
    } else if (difference >= -30) {
        console.log("On time");
    } else {
        console.log("Early");
    }
    
    if(difference !==0) { 
     
    }
    if (hoursForExam === 0) {
          console.log(`${minutes} minutes ${difference >= 0 ? "after" : "before"} the start`);
    } else { 
        console.log(`${hoursForExam}:${minutes < 10 ? "0" : ""}${minutes} hours ${difference >= 0 ? "after" : "before"} the start`);
    }

}
 exam (["9","30","9","50"]);