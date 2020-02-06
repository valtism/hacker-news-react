import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem } from "./ListItem";
import { getFrontPage, getLatest } from "../util/api";
import { Hit } from "../util/types";

export function List() {
  const { pathname, search } = useLocation();

  // This returns 0 when there is no page query string which works well for us.
  const page = Number(new URLSearchParams(search).get("p"));

  const [items, setItems] = useState<{ [key: string]: Hit[] }>({
    front: []
  });

  useEffect(() => {
    switch (pathname) {
      case "/":
      case "/news":
        getFrontPage(page).then(res =>
          setItems(items => ({ ...items, [pathname]: res.hits }))
        );
        break;
      case "/new":
        getLatest(page).then(res =>
          setItems(items => ({ ...items, [pathname]: res.hits }))
        );
        break;
      default:
        break;
    }
  }, [page, pathname]);

  console.log(pathname);

  return (
    <>
      {items[pathname] &&
        items[pathname].map(hit => <ListItem key={hit.objectID} {...hit} />)}
      <div className="ml-2">
        {page > 0 && <Link to={`${pathname}?p=${page - 1}`}>Prev</Link>}
        <Link to={`${pathname}?p=${page + 1}`}>Next</Link>
      </div>
    </>
  );
}
