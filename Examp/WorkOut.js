function calculateRunning(input) {
  
    let days = Number(input[0]);
    let initialKm = Number(input[1]);
    let totalKm = initialKm;

    for (let i = 2; i < input.length; i++) {
        let percentIncrease = Number(input[i]);
        initialKm += initialKm * (percentIncrease / 100);
        totalKm += initialKm;
    }

  
    if (totalKm >= 1000) {
        let extraKm = Math.ceil(totalKm - 1000);
        console.log(`You've done a great job running ${extraKm} more kilometers!`);
    } else {
        let missingKm = Math.ceil(1000 - totalKm);
        console.log(`Sorry Mrs. Ivanova, you need to run ${missingKm} more kilometers`);
    }
}

calculateRunning(["5", "30", "10", "15", "20", "5", "12"]);
calculateRunning(["4", "100", "30", "50", "60", "80", "12"]);

