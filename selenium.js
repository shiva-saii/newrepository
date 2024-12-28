const { Builder, By, Key, until } = require('selenium-webdriver');


(async () => {
    
     const driver=new Builder().forBrowser('chrome').build();
    try {
        // Test Case 1: Navigate to Google and verify title
        await driver.get('https://www.google.com');
        await driver.wait(until.titleContains('Google'), 10000);
        console.log('Test Case 1 Passed: Title contains"');

        // Test Case 2: Search for "Selenium" on Google
        await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
        await driver.wait(until.titleContains('Selenium'), 10000);
        console.log('Test Case 2 Passed: Title contains "Selenium"');

        // Test Case 3: Verify search results
        const searchResults = await driver.findElements(By.css('div.g'));
        console.log(`Test Case 3 Passed: Found ${searchResults.length} search results`);

        // Test Case 4: Verify the presence of the search input box
        const searchInput = await driver.findElement(By.name('q'));
        const isSearchInputDisplayed = await searchInput.isDisplayed();
        console.log(`Test Case 4 Passed: Search input box is displayed: ${isSearchInputDisplayed}`);

    } catch (error) {
        console.error('One or more test cases failed:', error);
    } finally {
        await driver.quit();
    }
})();

// const{Builder,By,Key,utill}=require("selenium-webdriver");
// async function example(){
//     let driver=await new Builder().forBrowser("chrome").build();
//     await driver.get("http://google.com");
//     await driver.findElement(By.name("q")).sendKeys("NTR",Key.RETURN);

// }
// example();
// // Import the selenium-webdriver library
// const { Builder, By, Key, until } = require('selenium-webdriver');

// async function exampleTest() {
//     // Initialize the WebDriver (using Chrome in this case)
//     let driver = await new Builder().forBrowser('chrome').build();

//     try {
//         // Open Google's website
//         await driver.get('https://www.google.com');

//         // Locate the search box, type 'Selenium' and press Enter
//         await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);

//         // Wait until the results are loaded and the title includes 'Selenium'
//         await driver.wait(until.titleContains('Selenium'), 10000);

//         console.log('Test Passed: The title contains "Selenium"');
//     } catch (error) {
//         console.error('Test Failed', error);
//     } finally {
//         // Close the browser
//         await driver.quit();
//     }
// }

// // Run the test
// exampleTest();