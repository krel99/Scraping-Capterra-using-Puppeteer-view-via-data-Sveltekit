# Scraping-Capterra-using-Puppeteer-view-via-data-Sveltekit

This is an admission project for a company I applied to. The goal is to scrape data from Capterra and create a view in Sveltekit using Skeleton UI Toolkit.

![Application preview](https://i.ibb.co/pj3xcHk/Screenshot-from-2024-04-19-19-53-27.png)

## Data Flow

1. Web Scraping:

    - Puppeteer navigates to https://www.capterra.com/categories/
    - Dynamically finds and extracts links for software and service categories.

2. Data Handling:

    - Extracted links are saved as JSON using Bun.js.

3. SvelteKit Application:

    - Loads JSON data.
    - Uses SkeletonUI's Tree View component to display data.

Data Flow:
[Puppeteer (Scraping)] --> [Node.js (Save JSON)]
[Node.js] --> [SvelteKit Application (Display Data)]

## Implemented features

- a scraper saves all content from the categories page in the desired JSON format
- SvelteKit application views the data in a tree-like structure

## Hypothetical features

-   Could scrape the first page (or 3) of each category for headers
-   Styles need to be better!

## Installation

### Prerequisities

Node or Bun must be installed!

### Installation

You can skip steps 1, 2, 3 if you want to use an already scraped JSON.

0. Open folder with the project files in the terminal.
1. Run `cd scraper`
2. Run `npm install` or `bun install`
3.0 Edit package.JSON in ~/scraper/package.json scripts line with npm instead of bun if using npm
3.1 Run `npm scrape` or `bun scrape`
4. Run `cd ../webView`
5. Run `npm run dev` or `bun dev` to view JSON in SvelteKit
