function everest(input) {
    let currentHeight = 5364;
    let days = 1;
    let index = 0;

    while (index < input.length) {
        let rest = input[index];
        let metersClimbed = Number(input[index + 1]);
        index += 2;

        if (rest === "Yes") {
            days++;
        } else if (rest === "END") {
            break;
        }

        if (days > 5) {
            console.log("Failed!");
            console.log(currentHeight);
            break;
        }

        currentHeight += metersClimbed;

        if (currentHeight >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            break;
        }
    }


    console.log("Failed!");
    console.log(currentHeight);
}


everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);