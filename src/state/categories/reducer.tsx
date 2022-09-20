
import { ICategoryState } from "../../interfaces/state/category";
import { IProductState } from "../../interfaces/state/product";
import * as types from "./types";

const initialstate: ICategoryState = {
  categoryList: [
    {
      id: 0,
      name: "",
    },
  ],
};

export const reducerOwners = (
  state: ICategoryState = initialstate,
  action: any
) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES:
      return Object.assign({}, state, { categoryList: action.payload });
    default:
      return state;
  }
};
