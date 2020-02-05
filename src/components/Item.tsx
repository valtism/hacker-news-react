import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getAlItem } from "../util/api";
import { Comment } from "./Comment";
import { ListItem } from "./ListItem";
import { ItemType } from "../util/types";

export function Item() {
  const { search } = useLocation();
  const [items, setItems] = useState<ItemType | null>(null);
  const [error, setError] = useState("");

  const id = new URLSearchParams(search).get("id");

  useEffect(() => {
    getAlItem(id)
      .then(setItems)
      .catch(setError); // See if this sets error right
  }, [id]);

  if (!id) {
    return <div>No id</div>;
  }

  if (!items) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { created_at, author, title, url, points, children } = items;

  let num_comments = 0;

  function countChildren(item: ItemType) {
    item.children.forEach(child => {
      num_comments++;
      countChildren(child);
    });
  }

  countChildren(items);

  return (
    <>
      <ListItem
        objectID={id}
        created_at={created_at}
        title={title}
        url={url}
        author={author}
        points={points}
        num_comments={num_comments}
      />
      <div className="-mx-8">
        {children.map(item => (
          <Comment items={item} />
        ))}
      </div>
    </>
  );
}
