function calculateBasketballExpenses(input) {
    let annualFee = Number(input[0]);

    let shoesPrice = annualFee * 0.6; // 40% по-малка от годишната такса
    let outfitPrice = shoesPrice * 0.8; // 20% по-евтина от тази на кецовете
    let ballPrice = outfitPrice / 4; // 1/4 от цената на баскетболния екип
    let accessoriesPrice = ballPrice / 5; // 1/5 от цената на баскетболната топка

    let totalExpenses = annualFee + shoesPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalExpenses.toFixed(2));
}

// Примерен вход
calculateBasketballExpenses(["320"]);

function calculateTennisEquipmentCost(input) {
    let pricePerRacket = parseFloat(input[0]);
    let numberOfRackets = parseInt(input[1]);
    let numberOfShoes = parseInt(input[2]);

    let pricePerShoes = pricePerRacket / 6;
    let totalRacketsCost = numberOfRackets * pricePerRacket;
    let totalShoesCost = numberOfShoes * pricePerShoes;
    let otherEquipmentCost = 0.2 * (totalRacketsCost + totalShoesCost);

    let totalCost = totalRacketsCost + totalShoesCost + otherEquipmentCost;

    let costForDjokovic = Math.floor(totalCost / 8);
    let costForSponsors = Math.ceil(totalCost * 7 / 8);

    console.log(`Price to be paid by Djokovic ${costForDjokovic}`);
    console.log(`Price to be paid by sponsors ${costForSponsors}`);
}

// Примерен вход
calculateTennisEquipmentCost(["850.00", "4", "2"]);

function fitnes(input) {

    let people = Number(input[0]);

    let back = 0;
    let chest = 0;
    let abs = 0;
    let legs = 0;
    let shake = 0;
    let bar = 0;

    let exerciseCounter = 0;
    let consumeCounter = 0;
    let index = 1;
    let currentRow = input[index];

    while (index <= people) {

        switch (currentRow) {
            case "Back":
                back++;
                exerciseCounter++;
                break;
            case "Chest":
                chest++;
                exerciseCounter++;
                break;
            case "Legs":
                legs++;
                exerciseCounter++;
                break;
            case "Abs":
                abs++;
                exerciseCounter++;
                break;
            case "Protein shake":
                shake++;
                consumeCounter++;
                break;
            case "Protein bar":
                bar++;
                consumeCounter++;
                break;
        }
        index++;
        currentRow = input[index];
    }

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${(exerciseCounter / people * 100).toFixed(2)}% - work out`);
    console.log(`${(consumeCounter / people * 100).toFixed(2)}% - protein`);

}


function movieCalculator(input) {
    // Четене на входните данни
    let index = 0;
    let movie = input[index];
    let numberOfSeasons = Number(input[1]);
    let numberOfEpisodes = Number(input[2]);
    let episodeTime = Number(input[3]);

    // Изчисление на времето за рекламите (20% от времетраенето на един епизод)
    let comercials = episodeTime * 0.2;

    // Общо времетраене на един епизод с рекламите
    let episodeWithComercials = episodeTime + comercials;

    // Общо време за гледане на обикновените епизоди
    let totalTimeRegularEpisodes = episodeWithComercials * numberOfEpisodes * numberOfSeasons;

    // Допълнително време от специалните епизоди (10 мин повече за всеки сезон)
    let extraTimeSpecialEpisodes = numberOfSeasons * 10;

    // Общо време за гледане на сериала
    let totalTime = totalTimeRegularEpisodes + extraTimeSpecialEpisodes;

    // Закръгляне към най-близкото цяло число надолу
    totalTime = Math.floor(totalTime);

    // Отпечатване на резултата
    console.log(`Total time needed to watch the ${movie} series is ${totalTime} minutes.`);
}

movieCalculator(["Game of Thrones","7","10","50"]);


function movieProfitCalculator(input) { 

    let moveName = input[0]; 
    let daysCount = Number(input[1]);
    let ticketCount = Number(input[2]); 
    let ticketPrice = Number(input[3]);
    let cinemaProcent = Number(input[4]); 

    let totalIncome = daysCount * ticketCount * ticketPrice; 

    let cinemaShare = totalIncome * (cinemaProcent / 100); 
    let studioProfit = totalIncome - cinemaShare; 

    console.log(`The profit from the movie ${moveName} is ${studioProfit.toFixed(2)}`);
}

movieProfitCalculator(["The Programmer", "20", "500", "7.50", "7"]); 
movieProfitCalculator(["Python Basics", "40", "34785", "10.45", "14"]);

