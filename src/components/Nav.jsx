import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="flex bg-orange-500 shadow">
      <Link to="/news" className="mx-1 font-bold">
        Hacker News
      </Link>
      <Link to="/new" className="mx-1">
        new |
      </Link>
      <Link to="/news" className="mx-1">
        threads |
      </Link>
      <Link to="/news" className="mx-1">
        past |
      </Link>
      <Link to="/news" className="mx-1">
        comments |
      </Link>
      <Link to="/news" className="mx-1">
        ask |
      </Link>
      <Link to="/news" className="mx-1">
        show |
      </Link>
      <Link to="/news" className="mx-1">
        jobs |
      </Link>
      <Link to="/news" className="mx-1">
        submit
      </Link>
    </div>
  );
}
