function footbalKit(input) {
    let priceForShirt = Number(input[0]);
    let neededSum = Number(input[1]);

    let priceForShorts = priceForShirt * 0.75;
    let priceForSocks = priceForShorts * 0.20;
    let priceForShoes = (priceForShirt + priceForShorts) * 2;

    let totalSum = priceForShirt + priceForShorts + priceForSocks + priceForShoes;
    let sumAfterDiscount = totalSum * 0.85;

    if (sumAfterDiscount >= neededSum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${sumAfterDiscount.toFixed(2)} lv.`);
    } else {
        let moneyNeed = neededSum - sumAfterDiscount;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${moneyNeed.toFixed(2)} lv. more.`);
    }
}

footbalKit(["25", "100"]);
