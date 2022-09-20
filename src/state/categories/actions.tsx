import axios from "axios";
import { ICategory } from "../../interfaces/state/category";
import * as types from "./types";

const _baseUrl = "https://propertyseviceapi.azurewebsites.net/api";
export const loadCategories = () => {
  return (dispatch: any) => {
    axios.get(`${_baseUrl}/category`).then((res) => {
      dispatch(setCategoryState(res.data));
    });
  };
};

export const setCategoryState = (data: ICategory) => ({
  type: types.LOAD_CATEGORIES,
  payload: data,
});
