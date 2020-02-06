import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Nav } from "./Nav";
import { List } from "./List";
import { Item } from "./Item";

export function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-white">
        <div className="max-w-5xl mx-auto my-2 bg-orange-100 rounded-sm overflow-hidden shadow-lg">
          <Nav />
          <div className="p-2">
            <Switch>
              <Route exact path="/">
                <List />
              </Route>
              <Route path="/news">
                <List />
              </Route>
              <Route path="/new">
                <List />
              </Route>
              <Route path="/item">
                <Item />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
