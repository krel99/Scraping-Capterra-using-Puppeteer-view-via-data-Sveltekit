import fs from 'fs';
import path from 'path';
import { ElementHandle } from 'puppeteer';
import { Url, CategoryItems, CategoryItem, Categories } from './types';
export function saveAsJsonAtRoot(data: Object) {
    try {
        const filePath = path.join(process.cwd(), '..', 'data.json');
        fs.writeFileSync(filePath, JSON.stringify(data));
        console.log('JSON file created at: ' + filePath);
    } catch (err) {
        console.error(err);
    }
}

export async function handleCategoryGroups(categoryGroups: Array<ElementHandle>, ROOT_URL: Url): Promise<Categories> {
    const categories: Categories = {};
    for (const group of categoryGroups) {
        const catGroup = await group.$eval('.browse-group-tag', (tag) => tag.textContent);
        if (!catGroup) {
            console.warn('Category name not found for this iteration');
            continue;
        }
        const catItems = await handleCategories(group, ROOT_URL);
        categories[catGroup] = catItems;
    }
    return categories;
}

async function handleCategories(handle: ElementHandle, ROOT_URL: Url): Promise<CategoryItems> {
    const catItems = await handle.$$eval(
        'li[data-testid="group-list-item"] a',
        (items, ROOT_URL) => {
            return items.map((item) => {
                const text = item.textContent;
                const href = ROOT_URL + item.getAttribute('href');
                return [text, href] as [string | null, Url | null];
            });
        },
        ROOT_URL
    );
    return catItems;
}
