function calculateFeeForPhisicalPerson(contractStartDate, currentDate) {
    let yearlyFee = 25;
    const daysInYear = 360;

    const startDate = new Date(contractStartDate);
    const endDate = new Date(currentDate);

    // Calculate the number of days between the start date and the end date
    const timeDiff = endDate - startDate;
    const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate the daily fee rate based on a 360-day year
    const dailyFeeRate = yearlyFee / daysInYear;

    // Calculate the fee up to the current date
    const feeUpToToday = dailyFeeRate * daysElapsed;

    return feeUpToToday.toFixed(2);
}

// Example usage:
const contractStartDate = '2024-01-16';
const currentDate = new Date().toISOString().split('T')[0];
const fee = calculateFee(contractStartDate, currentDate);

console.log(`Таксата до днешна дата е: ${fee} лв.`);


