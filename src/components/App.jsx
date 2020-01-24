import React, { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import { Nav } from "./Nav";
import { getFrontPage } from "../util/api";
import { fakeStories } from "../util/fakes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Item } from "./Item";

export function App() {
  const [stories, setStories] = useState();
  // setStories(fakeStories());
  useEffect(() => {
    getFrontPage()
      .then(setStories);
  }, []);
  return (
    <Router history>
      <div className="w-screen h-screen bg-white">
        <div className="max-w-5xl mx-auto my-2 bg-orange-100 rounded-sm overflow-hidden shadow-lg">
          <Nav />
          <div className="p-2">
            <Switch>
              <Route path="/item">
                <Item />
              </Route>
              <Route path="/">
                {stories && stories.map(story => (
                  <ListItem key={story.id} item={story} />
                ))}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
