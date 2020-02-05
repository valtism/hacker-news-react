import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

export function Comment({ items }) {
  const [show, setShow] = useState(true);

  const { created_at, author, text, children } = items;

  return (
    <div className="ml-8">
      <div className="flex mb-2 max-w-3xl">
        <div>
          <svg
            className="w-2 h-2 m-2 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 2"
          >
            <polygon points="0,2 1,0 2,2" />
          </svg>
          <svg
            className={`w-2 h-2 m-2 fill-current text-gray-600 ${
              show ? "invisible" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 2"
          >
            <polygon points="0,0 1,2 2,0" />
          </svg>
        </div>
        <div>
          <div className="text-gray-700 text-sm">
            <a className="hover:underline hover:text-black" href="#">
              {author}
            </a>{" "}
            <span>{formatDistanceToNow(new Date(created_at))} ago</span>
            <button className="ml-1" onClick={() => setShow(show => !show)}>
              [-]
            </button>
          </div>
          {show && (
            <>
              <div
                className="comment"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
              <div className="text-sm">
                <a className="underline" href="#">
                  reply
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      {show && children.map(item => <Comment key={item.id} items={item} />)}
    </div>
  );
}
