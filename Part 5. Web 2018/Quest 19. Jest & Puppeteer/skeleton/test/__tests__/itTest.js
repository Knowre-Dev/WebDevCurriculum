const 
    r2 = require('r2'),
    puppeteer = require('puppeteer'),
    testUrl = 'http://localhost:8080',
    headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    };

let 
    browser,
    page;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
});

afterAll(async () => {
    await browser.close();
});

test('login by id and pw', async () => {
    try {
        await page.goto(testUrl);
        await page.waitFor(1000);

        await page.$eval('#login-id', el => el.value = 'test1');
        await page.$eval('#login-pw', el => el.value = '1234');

        await page.click('#signin');
        await page.waitFor(1000);

        const data = await page.$eval('#userid', el => el.innerHTML);
        expect(data).toBe('test1');

    } catch (error) {
        console.log(error);
    }
});

test('create memo by title', async () => {
    try {
        await page.click('#popup_open');
        await page.$eval('#popup_text', el => el.value = 'it test memo');
        await page.click('#create');
        await page.waitFor(1000);

        await page.screenshot({path: 'main.png'});
        const data = await page.$eval('#files', (el, val) => {
            console.log(el);
            console.log(val);
        });
       
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
});