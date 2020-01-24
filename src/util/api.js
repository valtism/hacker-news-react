const api = "https://hacker-news.firebaseio.com/v0";

export function getItem(itemId) {
  return fetch(`${api}/item/${itemId}.json`).then(res => res.json());
}

export function getTopStories() {
  return fetch(`${api}/topstories.json`).then(res => res.json());
}

export async function getFrontPage() {
  const storyIds = await getTopStories();
  const top30 = storyIds.slice(0, 30);
  const stories = await Promise.all(top30.map(getItem));
  return stories.filter(s => s.type === "story" && !s.dead && !s.deleted);
}

export async function getComments(ids) {
  const comments = await Promise.all(ids.map(getItem));
  return comments.filter(s => s.type === "comment" && !s.dead && !s.deleted);
}
