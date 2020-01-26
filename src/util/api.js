const api = "https://hacker-news.firebaseio.com/v0";

export const STORIES_PER_PAGE = 30;

export function getItem(itemId) {
  return fetch(`${api}/item/${itemId}.json`).then(res => res.json());
}

export function getStoryIds(type) {
  return fetch(`${api}/${type}stories.json`).then(res => res.json());
}

export async function getPage(type, page) {
  const storyIds = await getStoryIds(type);
  const pageIds = storyIds.slice(page * 30, (page + 1) * 30);
  return await Promise.all(pageIds.map(getItem));
}

export async function getComments(ids) {
  const comments = await Promise.all(ids.map(getItem));
  return comments.filter(s => s.type === "comment" && !s.dead && !s.deleted);
}
