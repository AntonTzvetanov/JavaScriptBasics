function clock() {
    for (let hours = 0; hours < 24; hours++) {

        for (let minutes = 0; minutes < 60; minutes++) {
            console.log(`${hours}:${minutes}`)

        }

    }

}
clock();

function multiplicationTable() {

    for (let x = 1; x <= 10; x++) {

        for (let y = 1; y <= 10; y++) {
            let math = x * y;
            console.log(`${x} * ${y} = ${math}`)
        }
    }

}
multiplicationTable();

function magicNumber(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let isFoundMagicNumber = false;

    for (let x = startInterval; x <= endInterval; x++) {
        for (let y = startInterval; y <= endInterval; y++) {
            count++;
            if (x + y === magicNumber) {
                console.log(`Combination N:${count} (${x} + ${y} = ${magicNumber})`);
                isFoundMagicNumber = true;
                break;
            }
        }
        if (isFoundMagicNumber) {
            break;
        }
    }

    if (!isFoundMagicNumber) {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}

magicNumber(["88", "888", "2000"]);


function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let floors = floor; floors > 0; floors--) {
        let buffer = "";

        for (let rooms = 0; rooms < room; rooms++) {
            if (floors === floor) {
                buffer += "L" + floors + rooms + " ";
            } else if (floors % 2 === 0) {
                buffer += "O" + floors + rooms + " ";
            } else {
                buffer += "A" + floors + rooms + " ";
            }
        }
        console.log(buffer);
    }
}

building(["6", "4"]);



function traveling(input) {
    let index = 0;
    let counter = input[index];
    index++;

    while (counter !== "End") {
        let destination = counter;
        let budged = Number(input[index]);
        index++;
        let sum = 0;

        while (sum < budged) {
            let moneySaved = Number(input[index]);
            index++;
            sum += moneySaved;
        }

        console.log(`Going to ${destination}!`);

        counter = input[index];
        index++;
    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
]);


function combinations(input) {
    let n = Number(input[0]);
    let validCombinationCount = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                if (x1 + x2 + x3 === n) {
                    validCombinationCount++;
                }
            }
        }
    }

    console.log(validCombinationCount);
}

combinations(["20"]);
