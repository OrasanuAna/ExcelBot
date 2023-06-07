const puppeteer = require('puppeteer');

let browser;
let page;

async function invalidEmailTesting() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:first-of-type');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#usernameInput');
    await inputElement.type('Email invalid');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'invalidEmailTesting.png' });
    await closeBrowser()

    const testPassed = isError && text === 'Username must be an email';
    outputMessage( testPassed, " invalidEmailTesting" )
}

async function validEmailTesting() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const primulDiv = await page.$('#logInForm div.v-input.v-text-field:first-of-type');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await primulDiv.$('#usernameInput');
    await inputElement.type('abc@ad.com');
    const isError = await primulDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await primulDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await primulDiv.screenshot({ path: 'validEmailTesting.png' });
    await closeBrowser()

    const testPassed = !isError && text === 'Introduceti username-ul';
    outputMessage( testPassed, " validEmailTesting" )
}

async function emptyEmailTesting() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const primulDiv = await page.$('#logInForm div.v-input.v-text-field:first-of-type');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await primulDiv.$('#usernameInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.press('Tab');
    const isError = await primulDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await primulDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await primulDiv.screenshot({ path: 'emptyEmailTesting.png' });
    await closeBrowser()

    const testPassed = isError && text === 'Field can\'t be empty';
    outputMessage( testPassed, " emptyEmailTesting" )
}

async function passwordNotEmpty() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#passwordInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'emptyPasswordTesting.png' });
    await closeBrowser()

    const testPassed = isError && text === 'Field can\'t be empty';
    outputMessage( testPassed, " emptyPasswordTesting" )
}

async function passwordHasNumber() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#passwordInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.type('abc');
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'passwordHasNumber.png' });
    await closeBrowser()
    const testPassed = isError && text === 'Password must contain at least one number';
    outputMessage( testPassed, " passwordHasNumber" )

}

async function passwordHasUpper() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#passwordInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.type('abc1');
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'passwordHasUpper.png' });
    await closeBrowser()
    const testPassed = isError && text === 'Password must contain at least one uppercase letter';
    outputMessage( testPassed, " passwordHasUpper" )

}

async function passwordHasLower() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#passwordInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.type('ABC1');
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'passwordHasLower.png' });
    await closeBrowser()
    const testPassed = isError && text === 'Password must contain at least one lowercase letter';
    outputMessage( testPassed, " passwordHasLower" )

}

async function passwordHasSpecial() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#passwordInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.type('Abc1');
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'passwordHasSpecial.png' });
    await closeBrowser()
    const testPassed = isError && text === 'Password must contain at least one special character';
    outputMessage( testPassed, " passwordHasSpecial" )

}

async function passwordLength() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#passwordInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.type('Abc1*aB');
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'passwordLength.png' });
    await closeBrowser()
    const testPassed = isError && text === 'Password must be at least 16 characters long';
    outputMessage( testPassed, " passwordLength" )

}

async function passwordLength() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#passwordInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.type('Abc1*aB');
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'passwordLength.png' });
    await closeBrowser()
    const testPassed = isError && text === 'Password must be at least 16 characters long';
    outputMessage( testPassed, " passwordLength" )

}

async function confirmPasswordNotEmpty() {
    await startBrowser()
    await page.waitForSelector('#confirmInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(3)');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#confirmInput');
    await inputElement.click();
    // blur the element
    await page.keyboard.press('Tab');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({ path: 'confirmPasswordNotEmpty.png' });
    await closeBrowser()

    const testPassed = isError && text === 'Field can\'t be empty';
    outputMessage( testPassed, " emptyConfirmPasswordTesting" )
}

// make the startBrowser function and call it


async function startBrowser() {
    browser = await puppeteer.launch({ headless: "new" });
    page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
}

async function closeBrowser() {
    await browser.close()
}

function outputMessage( testPassed, message ) {
    console.log( (testPassed ? "✅" : "❌") + message )
}

async function passwordAndConfirmPassword() {
    await startBrowser()
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(2)');
    const thirdDiv = await page.$('#logInForm div.v-input.v-text-field:nth-of-type(3)');
    const inputElement = await secondDiv.$('#passwordInput');
    const inputElement2 = await thirdDiv.$('#confirmInput');
    await inputElement.click();
    await inputElement.type('Abc1*aBaaaaaaaaa');
    await inputElement2.click();
    await inputElement2.type('Abc1*aBaaaaaaaaa');
    await page.keyboard.press('Tab');
    const isError = await thirdDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await thirdDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await thirdDiv.screenshot({ path: 'passwordAndConfirmPassword.png' });
    await closeBrowser()
    const testPassed = !isError && text === 'Confirmati parola';
    outputMessage( testPassed, " passwordAndConfirmPassword" )
}

// todo: testati show password functionality

async function main() {

    await invalidEmailTesting();
    await validEmailTesting();
    await emptyEmailTesting();
    await passwordNotEmpty();
    await passwordHasNumber();
    await passwordHasUpper();
    await passwordHasLower();
    await passwordHasSpecial();
    await passwordLength();
    await confirmPasswordNotEmpty();
    await passwordAndConfirmPassword();
}

main();