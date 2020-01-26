import React, { useEffect, useReducer } from "react";
import { Nav } from "./Nav";
import { getPage, getStoryIds, STORIES_PER_PAGE } from "../util/api";
import { fakeStories } from "../util/fakes";
import { Switch, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Item } from "./Item";
import { List } from "./List";

const StoryType = {
  Top: "top",
  New: "new",
  Best: "best",
  Ask: "ask",
  Show: "show",
  Job: "job"
};

const MaxStories = {
  Top: 500,
  New: 500,
  Best: 500,
  Ask: 200,
  Show: 200,
  Job: 200
};

function isLastPage(type, page) {
  return Math.ceil(MaxStories[type] / STORIES_PER_PAGE) >= page;
}

function appReducer(state, action) {
  switch (action.type) {
    case "setType":
      return {
        itemType: action.itemType,
        page: 0,
        storyIds: { [action.itemType]: Array(MaxStories[action.itemType]) },
        stories: { [action.itemType]: Array(MaxStories[action.itemType]) }
      };
    case "setStoryIds":
      return {
        ...state,
        storyIds: { ...state.storyIds, [state.itemType]: action.storyIds }
      };
    case "setStories":
      return {
        ...state,
        stories: {
          ...state.stories,
          [state.itemType]: action.stories
        }
      };
    case "setPage":
      return {
        ...state,
        page: action.page
      };
    default:
      return;
  }
}

export function App() {
  const [state, dispatch] = useReducer(appReducer, {
    itemType: "top",
    page: 0,
    storyIds: { top: Array(MaxStories.Top) },
    stories: { top: Array(STORIES_PER_PAGE) }
  });

  useEffect(() => {
    getStoryIds(state.itemType).then(storyIds =>
      dispatch({ type: "setStoryIds", storyIds })
    );
  }, [state.itemType]);

  useEffect(() => {
    getPage(state.itemType, state.page).then(stories =>
      dispatch({ type: "setStories", stories })
    );
  }, [state.itemType, state.page]);

  return (
    <BrowserRouter history>
      <div className="w-screen h-screen bg-white">
        <div className="max-w-5xl mx-auto my-2 bg-orange-100 rounded-sm overflow-hidden shadow-lg">
          <Nav />
          <div className="p-2">
            <Switch>
              <Route path="/item">
                <Item />
              </Route>
              <Route path="/news">
                <List {...state} dispatch={dispatch} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
