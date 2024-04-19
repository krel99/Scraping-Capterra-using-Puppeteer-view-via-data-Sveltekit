export type Url = `https://${string}`;

export interface CategoryItems {
    [key: string]: [string | null, Url | null][];
}
