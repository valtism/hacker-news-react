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
  const id = Number(location.search.slice(1));

  useEffect(() => {
    if (item && item.id === id) {
      return;
    }
    // setItem(fakePost);
    getItem(id).then(setItem);
  }, [id, item]);

  useEffect(() => {
    if (!item || !item.kids) {
      return;
    }
    getComments(item.kids).then(setComments);
    // setComments(fakeComments());
  }, [item]);

  return (
    <>
      {item && item.kids && <ListItem item={item} />}
      <div className="-ml-8 mt-2">
        {comments && comments.map(c => <Comment key={c.id} item={c} />)}
      </div>
    </>
  );
}
