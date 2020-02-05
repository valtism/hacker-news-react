import { SearchResult, ItemType } from "./types";

const api = "https://hn.algolia.com/api/v1";

export const STORIES_PER_PAGE = 30;

export function getPageByType(type: string): Promise<SearchResult> {
  switch (type) {
    case "front":
      return getFrontPage();
    default:
      throw new Error("Wrong type");
  }
}

export function getFrontPage(): Promise<SearchResult> {
  return fetch(`${api}/search?tags=front_page`).then(res => res.json());
}

export function getAlItem(itemId: string | null): Promise<ItemType> {
  if (!itemId || isNaN(Number(itemId))) {
    throw new TypeError();
  }
  return fetch(`${api}/items/${itemId}`).then(res => res.json());
}
