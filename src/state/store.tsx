import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducerProperty } from "./products/reducer";
import { reducerOwners } from "./categories/reducer";

const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

const reducers = combineReducers({
  categories:reducerOwners,
  product: reducerProperty
});

export type RootState =  ReturnType<typeof reducers>
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
