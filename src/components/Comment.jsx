import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { getComments } from "../util/api";

export function Comment({ item }) {
  const { by, kids, text, time } = item;
  const [kidItems, setKidItems] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!kids) {
      return;
    }
    getComments(kids).then(setKidItems);
  }, [kids]);

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
              {by}
            </a>{" "}
            <span>{formatDistanceToNow(new Date(time * 1000))} ago</span>
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
      {show && kidItems.map(item => <Comment key={item.id} item={item} />)}
    </div>
  );
}
