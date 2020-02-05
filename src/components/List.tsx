import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem } from "./ListItem";
import { getFrontPage } from "../util/api";
import { Hit } from "../util/types";

export function List() {
  const { pathname, search } = useLocation();
  const page = Number(new URLSearchParams(search).get("p"));

  const [items, setItems] = useState<{ [key: string]: Hit[] }>({
    front: []
  });

  useEffect(() => {
    getFrontPage().then(res =>
      setItems(items => ({ ...items, [pathname]: res.hits }))
    );
  }, [pathname]);

  return (
    <>
      {items[pathname] &&
        items[pathname].map(hit => <ListItem key={hit.objectID} {...hit} />)}
      {/* <div className="ml-2">
        <Link to={`/news?p=${page - 1}`}>Prev</Link>
        <Link to={`/news?p=${page + 1}`}>Next</Link>
      </div> */}
    </>
  );
}
