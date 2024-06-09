function finalCompetition(input) {
    
    let numDancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];

    let prize = 0;
    if (location === "Bulgaria") {
        prize = numDancers * points;
    } else if (location === "Abroad") {
        prize = numDancers * points;
        prize += prize * 0.50;
    }


    let expensesPercentage = 0;
    switch (season) {
        case "summer":
            switch (location) {
                case "Bulgaria":
                    expensesPercentage = 0.05;
                    break;
                case "Abroad":
                    expensesPercentage = 0.10;
                    break;
            }
            break;
        case "winter":
            switch (location) {
                case "Bulgaria":
                    expensesPercentage = 0.08;
                    break;
                case "Abroad":
                    expensesPercentage = 0.15;
                    break;
            }
            break;
    }


    let expenses = prize * expensesPercentage;
    let netPrize = prize - expenses;

    let charity = netPrize * 0.75;
    let remainingMoney = netPrize * 0.25;
    let moneyPerDancer = remainingMoney / numDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}

finalCompetition(["1", "89.5", "summer", "Abroad"]);