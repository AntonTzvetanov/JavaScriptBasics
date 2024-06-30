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


import {
    test,
    expect
} from '@playwright/test';

test('has title', async ({
    page
}) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({
    page
}) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', {
        name: 'Get started'
    }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', {
        name: 'Installation'
    })).toBeVisible();
});