function excursion(input) {

    let people = Number(input[0]);
    let nightsToStay = Number(input[1]);
    let transportCards = Number(input[2]);
    let tickets = Number(input[3]);


    let priceForNight = nightsToStay * 20;
    let priceForTransportCards = transportCards * 1.60;
    let priceForMuseum = tickets * 6;

    let totalSumForPerson = priceForNight + priceForTransportCards + priceForMuseum;
    let priceForGroup = totalSumForPerson * people;


    let additionaSum = priceForGroup * 1.25;

    console.log(additionaSum.toFixed(2));
}


excursion(["131", "9", "33", "46"]);