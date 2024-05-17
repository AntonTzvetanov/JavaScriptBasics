function numsEndingIn7() {

    for (let i = 7; i <= 997; i++) {

        if (i % 10 === 7) {
            console.log(i);
        }

    }
}
numsEndingIn7();

function multiplicationTable(input) {
    let secondFactor = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let sum = i * secondFactor;
        console.log(`${i} * ${secondFactor} = ${sum}`);
    }
}
multiplicationTable(["5"]);

function Histogram(input) {
    // Вероятна задача за изпит
    let n = Number(input[0]);
    let procent1 = 0;
    let procent2 = 0;
    let procent3 = 0;
    let procent4 = 0;
    let procent5 = 0;

    for (let index = 1; index <= n; index++) {
        let num = Number(input[index]);

        if (num < 200) {
            procent1++
        } else if (num <= 399) {
            procent2++
        } else if (num <= 599) {
            procent3++
        } else if (num <= 799) {
            procent4++
        } else {
            procent5++
        }
    }

    let groupProcent1 = (procent1 / n) * 100;
    let groupProcent2 = (procent2 / n) * 100;
    let groupProcent3 = (procent3 / n) * 100;
    let groupProcent4 = (procent4 / n) * 100;
    let groupProcent5 = (procent5 / n) * 100;

    console.log(`${groupProcent1.toFixed(2)}%`);
    console.log(`${groupProcent2.toFixed(2)}%`);
    console.log(`${groupProcent3.toFixed(2)}%`);
    console.log(`${groupProcent4.toFixed(2)}%`);
    console.log(`${groupProcent5.toFixed(2)}%`);

}
Histogram(["9", "367", "99", "200","799","999","333","555","111","9"]);

function smartLily(input) { 

    // Вероятна задача за изпита! 
    let lilyAge = Number(input[0]); 
    let priceForWasher = Number(input[1]); 
    let priceFortoy = Number(input[2]);
    
    let oddBirthdaySum = 10; 
    let moneySavedFromBirthdays = 0; 

    for(let birthday = 1; birthday <= lilyAge; birthday++) { 

        if(birthday % 2 === 0) { 
            moneySavedFromBirthdays += oddBirthdaySum -1; //тук братчето краде по левче 
            oddBirthdaySum += 10;
        } else { 
            moneySavedFromBirthdays += priceFortoy; 
        }
    }

    if(moneySavedFromBirthdays >= priceForWasher) { 
        let leftSum = moneySavedFromBirthdays - priceForWasher; 
        console.log(`Yes! ${leftSum.toFixed(2)} `)
    } else { 
        let sumNeeded = priceForWasher - moneySavedFromBirthdays; 
        console.log(`No! ${sumNeeded.toFixed(2)}`); 
    }

}
smartLily(["10", "170.00","6"]);

function tennisRanklist(input) { 

let turnamentCount = Number(input[0]); 
let startingPoints= Number(input[1]); 





}