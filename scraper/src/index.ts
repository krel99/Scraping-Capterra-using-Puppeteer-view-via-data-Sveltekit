import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { executablePath } from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { saveAsJsonAtRoot } from './functions';
import { CategoryItems } from './types';

const PAGE_URL = 'https://www.capterra.com/categories/';

puppeteer.use(StealthPlugin());

async function scrape() {
    const browser = await puppeteer.launch({
        headless: false, // this allows me to manually confirm that I am not bot;
        executablePath: executablePath(), // earlier this was required to initialize Stealth plugin, may be fixed by now
    });
    const page = await browser.newPage();
    await page.goto(PAGE_URL, { waitUntil: 'networkidle2' });

    const groupHandles = await page.$$('.browse-group');
    const categories: CategoryItems = {};

    for (const handle of groupHandles) {
        const catGroup = await handle.$eval('.browse-group-tag', (tag) => tag.textContent);

        if (!catGroup) {
            console.warn('Category name not found for this iteration');
            continue;
        }

        const catItems = await handle.$$eval('li[data-testid="group-list-item"] a', (items) => {
            return items.map((item) => {
                const text = item.textContent;
                const href = item.getAttribute('href');
                return [text, href] as [string | null, string | null];
            });
        });

        categories[catGroup] = catItems;
    }

    // console.log(categories);

    const data = { categories };
    saveAsJsonAtRoot(data);

    browser.close();
}

await scrape();

process.exit(0);
