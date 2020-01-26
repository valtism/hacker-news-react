import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem } from "./ListItem";

export function List({ stories, itemType, dispatch }) {
  const { search } = useLocation();
  const page = Number(new URLSearchParams(search).get("p"));

  useEffect(() => {
    dispatch({ type: "setPage", page });
  }, [dispatch, page]);

  return (
    <>
      {stories[itemType] &&
        stories[itemType]
          .filter(s => s.type === "story" && !s.dead && !s.deleted)
          .map(story => <ListItem key={story.id} item={story} />)}
      <div className="ml-2">
        <Link to={`/news?p=${page - 1}`}>Prev</Link>
        <Link to={`/news?p=${page + 1}`}>Next</Link>
      </div>
    </>
  );
}
