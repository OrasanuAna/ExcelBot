const puppeteer = require('puppeteer');

async function invalidEmailTesting() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
    await page.waitForSelector('#usernameInput');
    const secondDiv = await page.$('#logInForm div.v-input.v-text-field:first-of-type');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await secondDiv.$('#usernameInput');
    await inputElement.type('Email invalid');
    const isError = await secondDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await secondDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await secondDiv.screenshot({path: 'invalidEmailTesting.png'});
    await browser.close();

    const testPassed = isError && text === 'Username must be an email';
    console.log( (testPassed ? "✅" : "❌") + " invalidEmailTesting" );
}

async function validEmailTesting() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
    await page.waitForSelector('#usernameInput');
    const primulDiv = await page.$('#logInForm div.v-input.v-text-field:first-of-type');


    // Accesați copilul cu text afișat din primul div
    const inputElement = await primulDiv.$('#usernameInput');
    await inputElement.type('abc@ad.com');
    const isError = await primulDiv.evaluate((el) => el.classList.contains('error--text'));
    const textElement = await primulDiv.$('.v-messages__message');
    const text = await page.evaluate(element => element.textContent, textElement);
    await primulDiv.screenshot({path: 'validEmailTesting.png'});
    await browser.close();

    const testPassed = !isError && text === 'Introduceti username-ul';
    console.log((testPassed ? "✅" : "❌") + " validEmailTesting");

}

async function emptyEmailTesting() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await primulDiv.screenshot({path: 'emptyEmailTesting.png'});
    await browser.close();

    const testPassed = isError && text === 'Field can\'t be empty';
    console.log((testPassed ? "✅" : "❌") + " emptyEmailTesting");

}

async function passwordNotEmpty() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'emptyPasswordTesting.png'});
    await browser.close();

    const testPassed = isError && text === 'Field can\'t be empty';
    console.log((testPassed ? "✅" : "❌") + " emptyPasswordTesting");

}

async function passwordHasNumber() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'passwordHasNumber.png'});
    await browser.close();
    const testPassed = isError && text === 'Password must contain at least one number';
    console.log((testPassed ? "✅" : "❌") + " passwordHasNumber");

}

async function passwordHasUpper() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'passwordHasUpper.png'});
    await browser.close();
    const testPassed = isError && text === 'Password must contain at least one uppercase letter';
    console.log((testPassed ? "✅" : "❌") + " passwordHasUpper");

}

async function passwordHasLower() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'passwordHasLower.png'});
    await browser.close();
    const testPassed = isError && text === 'Password must contain at least one lowercase letter';
    console.log((testPassed ? "✅" : "❌") + " passwordHasLower");

}

async function passwordHasSpecial() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'passwordHasSpecial.png'});
    await browser.close();
    const testPassed = isError && text === 'Password must contain at least one special character';
    console.log((testPassed ? "✅" : "❌") + " passwordHasSpecial");

}

async function passwordLength() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'passwordLength.png'});
    await browser.close();
    const testPassed = isError && text === 'Password must be at least 16 characters long';
    console.log((testPassed ? "✅" : "❌") + " passwordLength");

}

async function passwordLength() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'passwordLength.png'});
    await browser.close();
    const testPassed = isError && text === 'Password must be at least 16 characters long';
    console.log((testPassed ? "✅" : "❌") + " passwordLength");

}

async function confirmPasswordNotEmpty() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
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
    await secondDiv.screenshot({path: 'confirmPasswordNotEmpty.png'});
    await browser.close();

    const testPassed = isError && text === 'Field can\'t be empty';
    console.log((testPassed ? "✅" : "❌") + " emptyConfirmPasswordTesting");

}


invalidEmailTesting();
validEmailTesting();
emptyEmailTesting();
passwordNotEmpty();
passwordHasNumber();
passwordHasUpper();
passwordHasLower();
passwordHasSpecial();
passwordLength();
confirmPasswordNotEmpty();