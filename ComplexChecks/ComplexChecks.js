function dayOfTheWeek(input) {

    let day = Number(input[0]);

    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }

}
dayOfTheWeek([1]);


function weekendOrWorkingDay(input) {

    let days = input[0];
    switch (days) {

        case "Monday":

        case "Tuesday":

        case "Wednesday":
            ;
        case "Thursday":

        case "Friday":
            console.log(("Working day"));
            break;
            break;
        case "Saturday":
            console.log("Weekend");
            break;
        case "Sunday":
            console.log("Weekend");
            break
        default:
            console.log("Error");
            break;

    }
}
weekendOrWorkingDay(["test"]);

function animal(input) {

    let animal = input[0];

    switch (animal) {

        case "dog":
            console.log("mammal");
            break
        case "snake":
            console.log("reptile");
            break
        case "crocodile":
            console.log("reptile");
            break;
        case "tortoise":
            console.log("reptile");
            break;

        default:
            console.log("unknown");
            break;
    }

}
animal(["dog"]);


function ageAndGender(input) {

    let age = Number(input[0]);

    let gender = input[1];

    if (gender === "f") {
        if (age >= 16) {

            console.log("Ms.")
        } else(
            console.log("Miss")
        )
    } else {
        if (age >= 16) {
            console.log("Mr.")

        } else {
            console.log("Master");
        }
    }

}
ageAndGender(["17", "m"]);


function fruitOrVegetable(input) {

    let type = input[0];
    switch (type) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break
        default:
            console.log("unknown");
            break

    }
}
fruitOrVegetable(["tomato"])

function validateNumber(input) {
    let invalidNumber = Number(input[0]);
    let isValid = (invalidNumber >= 100 && invalidNumber <= 200) || invalidNumber === 0;
    if (!isValid) {
        console.log('invalid');
    }
}
validateNumber(["220"]);

function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);
    let price = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                price = qty * 0.50;
                break;
            case "water":
                price = qty * 0.80;
                break;
            case "beer":
                price = qty * 1.20;
                break;
            case "sweets":
                price = qty * 1.45;
                break;
            case "peanuts":
                price = qty * 1.60;
                break;
        }

    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                price = qty * 0.40;
                break;
            case "water":
                price = qty * 0.70;
                break;
            case "beer":
                price = qty * 1.15;
                break;
            case "sweets":
                price = qty * 1.30;
                break;
            case "peanuts":
                price = qty * 1.50;
                break;


        }
    } else if (city === "Varna") {
        switch (product) {
            case "coffee":
                price = qty * 0.45;
                break;
            case "water":
                price = qty * 0.70;
                break;
            case "beer":
                price = qty * 1.10;
                break;
            case "sweets":
                price = qty * 1.35;
                break;
            case "peanuts":
                price = qty * 1.55;
                break;
        }

    }
    console.log(price);
}
smallShop(["coffee", "Varna", "2"]);


function movieTicket(input) {

    let day = input[0];
    let price = 0;

    switch (day) {
        case "Monday":
            price = 12;
            break;
        case "Tuesday":
            price = 12;
            break;
        case "Wednesday":
            price = 14;
            break;
        case "Thursday":
            price = 14;
            break;
        case "Friday":
            price = 12;
            break;
        case "Saturday":
            price = 16;
            break;
        case "Sunday":
            price = 16;
            break;
    }
    console.log(price);


}

movieTicket(["Saturday"]);


function numberRange(input) {

    let anotherNumber = Number(input[0]);

    if (anotherNumber >= -100 && anotherNumber <= 100 && anotherNumber !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
numberRange(["25"])


function fruitStore(input) {

    let fruit = input[0];
    let workingDay = input[1];
    let quantity = Number(input[2]);
    let priceOfFruit = 0;
    let isValidInput = true;

    if (workingDay === "Monday" || workingDay === "Tuesday" || workingDay === "Wednesday" || workingDay === "Thursday" || workingDay === "Friday") {
        switch (fruit) {
            case "banana":
                priceOfFruit = quantity * 2.50;
                break;
            case "apple":
                priceOfFruit = quantity * 1.20;
                break;
            case "orange":
                priceOfFruit = quantity * 0.85;
                break;
            case "grapefruit":
                priceOfFruit = quantity * 1.45;
                break;
            case "kiwi":
                priceOfFruit = quantity * 2.70;
                break;
            case "pineapple":
                priceOfFruit = quantity * 5.50;
                break;
            case "grapes":
                priceOfFruit = quantity * 3.85;
                break;
            default:
                isValidInput = false;

        }
    } else if (workingDay === "Saturday" || workingDay === "Sunday") {
        switch (fruit) {
            case "banana":
                priceOfFruit = quantity * 2.70;
                break;
            case "apple":
                priceOfFruit = quantity * 1.25;
                break;
            case "orange":
                priceOfFruit = quantity * 0.90;
                break;
            case "grapefruit":
                priceOfFruit = quantity * 1.60;
                break;
            case "kiwi":
                priceOfFruit = quantity * 3.00;
                break;
            case "pineapple":
                priceOfFruit = quantity * 5.60;
                break;
            case "grapes":
                priceOfFruit = quantity * 4.20;
                break;
            default:
                isValidInput = false;

        }

    }
    if (isValidInput && priceOfFruit !== 0) {
        console.log(priceOfFruit.toFixed(2));
    } else {
        console.log("error");
    }

}

fruitStore(["grapes", "Monday", "0.5"]);


function workingOfficeTime(input) {

    let hoursOfDay = Number(input[0]);
    let dayOfWeek = input[1];

    if (hoursOfDay >= 10 && hoursOfDay <= 18) {
        if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday" || dayOfWeek === "Saturday") {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }

}
workingOfficeTime(["11", "Sunday"]);