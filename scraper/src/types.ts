export type Url = `https://${string}`;

export type CategoryItem = [string | null, Url | null];
export type CategoryItems = CategoryItem[];

export interface Categories {
    [key: string]: CategoryItems;
}
