function grade(input) {

    let grade = Number(input);

    if (grade >= 5.50) {

        console.log("execelent")
    } else {
        console.log("Week")
    }
}
grade(["5.50"]);

function isEven(input) {

    let num = Number(input);

    if (num % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd");
    }
}
isEven(["5"]);

function bonusPoints(input) {
    let points = Number(input[0]);
    let bonusScore = 0;

    // Основни бонус точки
    if (points > 1000) {
        bonusScore = points * 0.10;
    } else if (points > 100) {
        bonusScore = points * 0.20;
    } else if (points <= 100) {
        bonusScore = 5;
    }

    // Допълнителни бонус точки
    if (points % 10 === 5) {
        bonusScore += 2;
    } else if (points % 2 === 0) {
        bonusScore += 1;
    }

    let totalScore = points + bonusScore;

    console.log(`Bonus score: ${bonusScore}`);
    console.log(`Total score: ${totalScore}`);
}

// Примерен тест
bonusPoints(["20"]);


function personalTitles(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (age < 16) {
        if (gender === 'm') {
            console.log("Mister");
        } else if (gender === 'f') {
            console.log("Miss");
        }
    } else {
        if (gender === 'm') {
            console.log("Mr.");
        } else if (gender === 'f') {
            console.log("Ms.");
        }
    }

    personalTitles(["25", "f"]);



    function fruitMarket(input) {


        let fruitOrVegetable = input[0];

        if (fruitOrVegetable === 'banana' || fruitOrVegetable === "apple" || fruitOrVegetable === "kiwi" || fruitOrVegetable === 'cherry') {
            console.log("fruit");
        } else if (fruitOrVegetable === 'tomato' || fruitOrVegetable === "lemon" || fruitOrVegetable === "carrot" || fruitOrVegetable === "cucumber") {
            console.log("vegetable");
        } else {
            console.log("unknown");
        }
    }
    fruitMarket(["apple"]);

    function invalidNumber(input) {

        let num = Number(input[0]);

        let inRange = (num >= 100 && num <= 200 || num === 0);
        if (!inRange) {
            console.log('invalid');
        } else {
            console.log('valid');
        }

    }
} 
invalidNumber(["12"]); 


//малко цикли за решаване 
