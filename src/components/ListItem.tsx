import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import { ListItemType } from "../util/types";

export function ListItem({
  objectID,
  url,
  title,
  points,
  author,
  created_at,
  num_comments
}: ListItemType) {
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
          <a href={url}>{title}</a>
          {url && (
            <div className="text-sm ml-1 text-gray-700">
              (<span>{new URL(url).hostname}</span>)
            </div>
          )}
        </div>
        <div className="flex text-xs">
          <div className="mr-2 text-gray-700">
            {points} points by {author}{" "}
            {formatDistanceToNow(new Date(created_at))} ago
          </div>
          <Link
            className="hover:underline"
            to={{ pathname: "/item", search: `?id=${objectID}` }}
          >
            {num_comments} Comments
          </Link>
        </div>
      </div>
    </div>
  );
}
