import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="flex bg-orange-500 shadow">
      <Link to="/" className="mx-1 font-bold">
        Hacker News
      </Link>
      <Link to="/" className="mx-1">
        new |
      </Link>
      <Link to="/" className="mx-1">
        threads |
      </Link>
      <Link to="/" className="mx-1">
        past |
      </Link>
      <Link to="/" className="mx-1">
        comments |
      </Link>
      <Link to="/" className="mx-1">
        ask |
      </Link>
      <Link to="/" className="mx-1">
        show |
      </Link>
      <Link to="/" className="mx-1">
        jobs |
      </Link>
      <Link to="/" className="mx-1">
        submit
      </Link>
    </div>
  );
}
