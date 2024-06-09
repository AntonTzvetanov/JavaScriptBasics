function multiplicationTable(input) {
    let number = Number(input);
    let thirdDigit = number % 10;
    number = Math.floor(number / 10);
    let secondDigit = number % 10;
    number = Math.floor(number / 10);
    let firstDigit = number;

    for (let i = 1; i <= thirdDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= firstDigit; k++) {
                let result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}


multiplicationTable(324);
