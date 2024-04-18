# Scraping-Capterra-using-Puppeteer-view-via-data-Sveltekit

This is an admission project for a company I applied to. The goal is to scrape data from Capterra and create a view in Sveltekit.

## Data Flow

1. Web Scraping:

    - Puppeteer navigates to https://www.capterra.com/categories/
    - Dynamically finds and extracts links for software and service categories.

2. Data Handling:

    - Extracted links are saved as JSON using Node.js.

3. SvelteKit Application:

    - Loads JSON data.
    - Uses SkeletonUI's Tree View component to display data.

Data Flow:
[Puppeteer (Scraping)] --> [Node.js (Save JSON)]
[Node.js] --> [SvelteKit Application (Display Data)]

## Implemented features

A scraper saves all content from the categories page in the desired JSON format.

## Planned features

-   SvelteKit application to view the data in a tree-like structure
-   Could scrape the first page (or 3) of each category for headers

## Installation

### Prerequisities

Node or Bun must be installed!

### Installation

0. Open folder with the project files in the terminal.
1. Run `cd scraper`
2. Run `npm install` or `bun install`
3. Run `npm scrape` or `bun scrape`
