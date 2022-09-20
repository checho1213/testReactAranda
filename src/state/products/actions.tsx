import axios from "axios";
import { IProduct } from "../../interfaces/state/product";
import * as types from "./types";

const _baseUrl = "https://propertyseviceapi.azurewebsites.net/api";

export const loadProducts = () => {  
  return (dispatch: any) => {
    axios.get(`${_baseUrl}/product/GetAllProducts`).then((res) => {      
      dispatch(setProductsState(res.data));
    });
  };
};

export const loadProductsByFilter = (
  name: string,
  description: string,
  categoryId: number
) => {
  return (dispatch: any) => {
    axios
      .get(
        `${_baseUrl}/product/GetProductsByFilter?name=${name}&description=${description }&category=${categoryId}`
      )
      .then((res) => {
        debugger
        dispatch(setProductsState(res.data));
      });
  };
};

export const updateProduct = (
  product: IProduct
) => {
  product
  return (dispatch: any) => {
    axios
      .post(
        `${_baseUrl}/product/updateProduct`, product
      )
      .then((res) => {
        dispatch(loadProducts());
      });
  };
};

export const createProduct = (
  product: IProduct
) => {
  product
  return (dispatch: any) => {
    axios
      .post(
        `${_baseUrl}/product/saveProduct`, product
      )
      .then((res) => {
        dispatch(loadProducts());
      });
  };
};

export const setOpenDetails = (open: boolean) => ({
  type: types.SET_OPEN_DETAIL,
  payload: open,
});

export const setProductEdit = (product: IProduct) => ({
  type: types.SET_PRODUCT_EDIT,
  payload: product,
});

export const setProductsState = (data: IProduct) => ({
  type: types.LOAD_PRODUCTS,
  payload: data,
});

export const setProductName = (data: string) => ({
  type: types.SET_NAME_PRODUCT_EDIT,
  payload: data,
});

export const setProductDescription = (data: string) => ({
  type: types.SET_DESCRIPTION_PRODUCT_EDIT,
  payload: data,
});

export const setProductCategory = (data: string) => ({
  type: types.SET_CATEGORY_PRODUCT_EDIT,
  payload: data,
});
