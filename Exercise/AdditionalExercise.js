function trapeziodArea(input) {

    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let formulaForArea = (b1 + b2) * h / 2;

    console.log(formulaForArea.toFixed(2));

}
trapeziodArea(["8", "13", "7"]);

function triangleArea(input) {

    let a = Number(input[0]);
    let hight = Number(input[1]);

    let arr = a * hight / 2;

    console.log(arr.toFixed(2));

}
triangleArea(["20", "30"]);

function celsiusToFahrenheit(input) {


    let celsious = Number(input[0]);

    let farenheit = celsious * 9 / 5 + 32;
    console.log(farenheit.toFixed(2));

}
celsiusToFahrenheit(["0"]);


function calculateRevenueInEuros(input) {
    let priceVegetablesPerKg = parseFloat(input[0]);
    let priceFruitsPerKg = parseFloat(input[1]);
    let kgVegetables = parseInt(input[2]);
    let kgFruits = parseInt(input[3]);

    let totalRevenueLeva = (priceVegetablesPerKg * kgVegetables) + (priceFruitsPerKg * kgFruits);
    let totalRevenueEuros = totalRevenueLeva / 1.94;

    console.log(totalRevenueEuros.toFixed(2));
}

calculateRevenueInEuros(["0.194", "19.4", "10", "10"]);

function calculateWorkplaces(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    // Преобразуваме мерките в сантиметри
    let widthCm = w * 100;
    let heightCm = h * 100;

    // Широчината за работните места от двете страни на коридора (оставяме 100 см за коридора)
    let usableHeightCm = heightCm - 100;

    // Брой редове и колони
    let rows = Math.floor(widthCm / 120);
    let cols = Math.floor(usableHeightCm / 70);

    // Общ брой работни места
    let totalPlaces = rows * cols - 3; // Изваждаме местата за вратата и катедрата

    console.log(totalPlaces);
}

// Примерно извикване на функцията
calculateWorkplaces(["15", "8.9"]); // Входни данни: w = 15 метра, h = 8.9 метра




function fishland(input) {
    // Четене на входните данни
    let priceMackerelPerKg = parseFloat(input[0]);
    let priceSpratPerKg = parseFloat(input[1]);
    let kgBonito = parseFloat(input[2]);
    let kgScad = parseFloat(input[3]);
    let kgMussels = parseInt(input[4]);

    // Изчисляване на цените на рибите и мидите
    let priceBonitoPerKg = priceMackerelPerKg * 1.60;
    let priceScadPerKg = priceSpratPerKg * 1.80;
    let priceMusselsPerKg = 7.50;

    // Изчисляване на общите разходи за всяка риба и мидите
    let totalCostBonito = kgBonito * priceBonitoPerKg;
    let totalCostScad = kgScad * priceScadPerKg;
    let totalCostMussels = kgMussels * priceMusselsPerKg;

    // Сумиране на общите разходи
    let totalCost = totalCostBonito + totalCostScad + totalCostMussels;

    // Форматиране на резултата до втория знак след десетичната запетая
    console.log(totalCost.toFixed(2));
}
fishland(["6.90", "4.20", "1.5", "2.5", "1"])

function cyrcleAndAreaPerimeter(input) {

    let r = Number(input[0]);

    let cyrcleFormula = Math.PI * r * r;
    let perimeterFormula = 2 * Math.PI * r;

    console.log(cyrcleFormula.toFixed(2));
    console.log(perimeterFormula.toFixed(2));

}
cyrcleAndAreaPerimeter(["4.5"]);

function weatherForcast(input) {

    let weather = input[0];

    if (weather === "sunny") {
        console.log(`It's warm outside!`)
    } else if (weather === "cloudy") {

        console.log(`It's cold outside!`);
    } else {
        console.log(`It's cold outside!`);
    }
}
weatherForcast(["snowy"]);


function weatherForecast2(input) {
    let temperature = Number(input[0]);

    if (temperature >= 26.00 && temperature <= 35.00) {
        console.log("Hot");
    } else if (temperature >= 20.1 && temperature <= 25.9) {
        console.log("Warm");
    } else if (temperature >= 15.00 && temperature <= 20.00) {
        console.log("Mild");
    } else if (temperature >= 12.00 && temperature <= 14.9) {
        console.log("Cool");
    } else if (temperature >= 5.00 && temperature <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

// Примерно извикване на функцията
weatherForecast2(["22.4"]); // Входни данни: градуси
