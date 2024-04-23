function convertorUsdToBgn(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}
convertorUsdToBgn(["22"]);

function convertInchToCm(input) {
    let inch = Number(input[0]);
    let cm = inch * 2.54;
    console.log(cm);
}
convertorUsdToBgn(["22"]);

function depositClaculator(input) {
    let depositSum = Number(input[0]);
    let depositDate = Number(input[1]);
    let interestRate = Number(input[2]) / 100;
    let sum = depositSum + depositDate * ((depositSum * interestRate) / 12);
    console.log(sum);
}
depositClaculator(["2350 ", "6", "7"]);

function radianToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = (radians * 180) / Math.PI;
    console.log(degrees);
}
radianToDegrees(["3.1416"]);

function literature(input) {
    let pagesTotal = Number(input[0]);
    let pages = Number(input[1]);
    let totalDays = Number(input[2]);
    let totalHoursPerDay = pagesTotal / pages;
    let hoursPerDay = totalHoursPerDay / totalDays;
    console.log(hoursPerDay);
}

literature(["212", "20 ", "2"]);

function painting(input) {
    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let sumForNailon = (nailon + 2) * 1.5;
    let sumForPaint = 1.1 * paint * 14.5; //добавяме 110%
    let sumForRazreditel = razreditel * 5;

    let materialSum = sumForNailon + sumForPaint + sumForRazreditel + 0.4;
    let PaymentPerHour = materialSum * 0.3;
    let totalPayment = PaymentPerHour * hours;
    let totalSum = materialSum + totalPayment;

    console.log(totalSum);
}

painting(["10", "11", "4", "8"]);


function schoolMaterials(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let washerinLiters = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let priceForPens = pens * 5.80;
    let priceForMarkers = markers * 7.20;
    let priceForWashers = washerinLiters * 1.20;
    let PriceForAllMaterials = priceForPens + priceForMarkers + priceForWashers;

    let priceWithDiscount = PriceForAllMaterials - (PriceForAllMaterials * discount);
    console.log(priceWithDiscount);

}

schoolMaterials(["4", "2", "5", "13"]);
