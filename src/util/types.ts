export type Hit = {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: string;
  comment_text?: string;
  num_comments: number;
  story_id?: number;
  story_title?: string;
  story_url?: string;
  parent_id?: number;
  created_at_i: number;
  _tags?: string[];
  objectID: string;
  _highlightResult?: {
    title: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    url: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    author: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
  };
};

export type SearchResult = {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
};

export type ItemType = {
  id: number;
  created_at: string;
  created_at_i: number;
  type: string;
  author: string;
  title: string;
  url: string;
  text: string;
  points: number;
  parent_id: number;
  story_id: number;
  children: ItemType[];
  options: any[];
};

export type ListItemType = {
  objectID: string;
  url: string;
  title: string;
  points: number;
  author: string;
  created_at: string;
  num_comments: number;
};
