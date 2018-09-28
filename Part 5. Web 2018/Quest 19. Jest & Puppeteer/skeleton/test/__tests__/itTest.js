const puppeteer = require('puppeteer');
const testUrl = 'http://localhost:8080';

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
});

afterAll(async () => {
    await browser.close();
});

test('login by id and pw', async () => {
    try {
        const id = 'test1';
        const pw = '1234';

        await page.goto(testUrl);
        await page.waitFor(1000);

        await page.type('#login-id', id);
        await page.type('#login-pw', pw);

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
        const title = 'it test memo';
        await page.click('#popup_open');
        await page.type('#popup_text', title);
        await page.click('#create');
        await page.waitFor(1000);
        
        const data = await page.evaluate(el => el.innerHTML, await page.$('#files div:last-child span'));
        expect(data).toBe(title);
    } catch (error) {
        console.log(error);
    }
});

test('update memo by userid and title', async () => {
    try {
        await page.reload();
        await page.waitFor(1000);

        const content = 'it test content';
        await page.evaluate(text => {
            const textarea = document.getElementById('content_text');
            textarea.value = text;
            textarea.onkeydown();
        }, content)
        await page.waitFor(1000);

        await page.reload();
        await page.waitFor(1000);

        const data = await page.$eval('#content_text', el => el.value);
        expect(data).toBe(content);
    } catch (error) {
        console.log(error);
    }
});