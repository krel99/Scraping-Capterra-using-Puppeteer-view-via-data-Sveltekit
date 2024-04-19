import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { executablePath } from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { saveAsJsonAtRoot as saveAsJson, handleCategoryGroups } from './functions';
import { Categories, Url } from './types';

const WEBSITE_ROOT_URL = 'https://www.capterra.com/';
const CATEGORY_PAGE_URL = 'https://www.capterra.com/categories/';

puppeteer.use(StealthPlugin());

async function scrape() {
    const browser = await puppeteer.launch({
        headless: false, // this allows me to manually confirm that I am not bot;
        executablePath: executablePath(), // earlier this was required to initialize Stealth plugin, may be fixed by now
    });
    const page = await browser.newPage();
    await page.goto(CATEGORY_PAGE_URL, { waitUntil: 'networkidle2' });

    const groupHandles = await page.$$('.browse-group');
    const categories: Categories = await handleCategoryGroups(groupHandles, WEBSITE_ROOT_URL);
    const data = { categories };
    saveAsJson(data);
    browser.close();
}

await scrape();
// process.exit(0);
