import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getItem, getComments } from "../util/api";
import { fakePost, fakeComments } from "../util/fakes";
import { Comment } from "./Comment";
import { ListItem } from "./ListItem";

function download(data) {
  let a = document.createElement("a");
  a.href =
    "data:application/octet-stream," + encodeURIComponent(JSON.stringify(data));
  a.download = "comments.json";
  a.click();
}

export function Item() {
  const location = useLocation();
  const [item, setItem] = useState(() => location.state || null);
  const [comments, setComments] = useState(null);
  const id = location.search.slice(1);

  useEffect(() => {
    if (item && item.id === location.search) {
      return;
    }
    // setItem(fakePost);
    getItem(id).then(setItem);
  }, [location.search]);

  useEffect(() => {
    if (!item || !item.kids) {
      return;
    }
    getComments(item.kids).then(setComments);
    // setComments(fakeComments());
  }, [item]);

  return (
    <div>
      {item && item.kids && <ListItem item={item} />}
      {comments && comments.map(c => <Comment key={c.id} item={c} />)}
    </div>
  );
}
