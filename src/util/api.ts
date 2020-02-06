import { SearchResult, ItemType } from "./types";

const api = "https://hn.algolia.com/api/v1";

// export function getPage(type: string, page: number = 0): Promise<SearchResult> {
//   switch (type) {
//     case "front":
//       return getFrontPage(page);
//     default:
//       throw new Error("Wrong type");
//   }
// }

export function getFrontPage(page: number = 0): Promise<SearchResult> {
  return fetch(`${api}/search?tags=front_page&page=${page}`).then(res =>
    res.json()
  );
}

export function getLatest(page: number = 0): Promise<SearchResult> {
  return fetch(`${api}/search_by_date?tags=story&page=${page}`).then(res => res.json());
}

export function getAlItem(itemId: string | null): Promise<ItemType> {
  if (!itemId || isNaN(Number(itemId))) {
    throw new TypeError();
  }
  return fetch(`${api}/items/${itemId}`).then(res => res.json());
}
