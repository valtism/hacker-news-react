import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";

export function ListItem({ item }) {
  const { id, title, url, score, by, time, descendants } = item;
  return (
    <div className="flex mb-2 items-center">
      <div>
        <svg
          className="w-2 h-2 m-2 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2 2"
        >
          <polygon points="0,2 1,0 2,2" />
        </svg>
        <svg
          className="w-2 h-2 m-2 fill-current text-gray-600 invisible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2 2"
        >
          <polygon points="0,0 1,2 2,0" />
        </svg>
      </div>
      <div>
        <div className="flex items-baseline">
          <a className="mr-2" href={url}>
            {title}
          </a>
          <div className="text-sm text-gray-700">
            (<span>{new URL(url).hostname}</span>)
          </div>
        </div>
        <div className="flex text-xs">
          <div className="mr-2 text-gray-700">
            {score} points by {by} {formatDistanceToNow(new Date(time * 1000))}{" "}
            ago
          </div>
          <Link
            className="hover:underline"
            to={{ pathname: "/item", search: `?${id}`, state: { item } }}
          >
            {descendants} Comments
          </Link>
        </div>
      </div>
    </div>
  );
}
