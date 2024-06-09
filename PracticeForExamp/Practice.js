//задача 1 

function movieCount(input) {

    let movieName = input[0];
    let numDays = Number(input[1]);
    let numTicketsPerDay = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercentege = Number(input[4]);

    let totalTicketSold = numDays * numTicketsPerDay;
    let totalRevenue = totalTicketSold * ticketPrice;

    let cinemaShare = totalRevenue * (cinemaPercentege / 100);
    let studioProfit = totalRevenue - cinemaShare;

    console.log(`The profit from the movie ${movieName} is ${studioProfit.toFixed(2)} lv.`);

}
movieCount(["The Programmer", "20", "500", "7.50", "7"]);

//задача 2 

function familyTrip(input) {

    let budgetAvailable = Number(input[0]);
    let nightsToStay = Number(input[1]);
    let priceForNight = Number(input[2]);
    let procentForAdditionalExpences = Number(input[3]);

    if (nightsToStay > 7) {
        priceForNight *= 0.95;
    }

    let totalAcomodation = nightsToStay * priceForNight;
    let additionalExpences = budgetAvailable * (procentForAdditionalExpences / 100);

    let totalCost = totalAcomodation + additionalExpences;

    if (budgetAvailable >= totalCost) {

        let moneyLeft = budgetAvailable - totalCost;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else {
        let moneyNeeded = totalCost - budgetAvailable;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }

}
familyTrip(["500", "7", "66", "15"]);

