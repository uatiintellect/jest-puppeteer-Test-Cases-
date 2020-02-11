import puppeteer from 'puppeteer';
let browser;
const app = 'file:///home/sherry/Documents/classsed-jest/index.html';

// Test 1
test('validating first name field' , async () => {
     browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto(app);
  await page.setViewport({ width: 1600, height: 704 });
  await page.click('input#firstName');
  await page.type('input#firstName' , ' ');
  await page.click('input#lastName')
    let firstNamInputClass =  await page.$eval(
        'input#firstName',
        (input) => input.className
    );
  expect (firstNamInputClass).toBe('invalid');
  
  await page.click('input#firstName');
  await page.type('input#firstName' , 'John');
  await page.click('input#email');

    firstNamInputClass =  await page.$eval(
    'input#firstName',
    (input) => input.className
);
expect (firstNamInputClass).toBe('valid');
  await browser.close()
});

//Test 2
test('validating all fields', async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 35
    });
    const page = await browser.newPage();
    await page.goto(app);

    await page.click('input#firstName');
    await page.type('input#firstName' , ' ');
    await page.click('input#lastName');
    await page.type('input#lastName' , 'Doe');
    await page.click('input#password');
    await page.type('input#password' , '123456abc');
    await page.click('input#confirmPassword');
    await page.type('input#confirmPassword' , '123456abc');
    await page.click('input#email');
    await page.type('input#email' , 'john@email.com');
    await page.click('input#firstName');

    // check to see if there is any invalid field in form
    try{
        const invalidInput = await page.$eval('input.valid',(input)=> input);
        expect (invalidInput).toBeDefined();
    }
    catch(err){
        expect(err).toBe(true);
    }
    await browser.close();
},10000);

// Test 3
test ('click Button', async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 40,
    args: ['--window-size=1600,900']
  });
  const page = await browser.newPage();
  await page.goto(app);
  await page.click('input#firstName');
    await page.type('input#firstName' , 'John');
    await page.click('input#lastName');
    await page.type('input#lastName' , 'Doe');
    await page.click('input#password');
    await page.type('input#password' , '123456abc');
    await page.click('input#confirmPassword');
    await page.type('input#confirmPassword' , '123456abc');
    await page.click('input#email');
    await page.type('input#email' , 'john@email.com');
    await page.click('button#formBtn');
    let successPanel = await page.waitForSelector('div.card-panel');
    expect (successPanel).toBeDefined();
    await browser.close();
},10000)