import { IProductState } from "../../interfaces/state/product";
import * as types from "./types";

const initialstate: IProductState = {
  productList: [
    {
      id: 0,
      name: "",
      description: "",
      categoryId: 0
    }
  ],
  openDialog: false,
  productEdit: {
    id: 0,
    name: "",
    description: "",
    categoryId: 0
  },
};

export const reducerProperty = (
  state: IProductState = initialstate,
  action: any
) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return Object.assign({}, state, { productList: action.payload });
    case types.SET_OPEN_DETAIL:
      return Object.assign({}, state, { openDialog: action.payload });
    case types.SET_PRODUCT_EDIT:
      return Object.assign({}, state, { productEdit: action.payload });
    case types.SET_NAME_PRODUCT_EDIT:
      return {
            ...state,
            productEdit: {
              ...state.productEdit,
              name: action.payload,
            },
          };
    case types.SET_DESCRIPTION_PRODUCT_EDIT:
      return {
            ...state,
            productEdit: {
              ...state.productEdit,
              description: action.payload,
            },
          };
    case types.SET_CATEGORY_PRODUCT_EDIT:
      return {
            ...state,
            productEdit: {
              ...state.productEdit,
              categoryId: action.payload,
            },
          };
    // case types.SET_NAME_PROPERTY_EDIT:
    //   return {
    //     ...state,
    //     propertyEdit: {
    //       ...state.propertyEdit,
    //       name: action.payload,
    //     },
    //   };
    // case types.SET_ADDRESS_PROPERTY_EDIT:
    //   return {
    //     ...state,
    //     propertyEdit: {
    //       ...state.propertyEdit,
    //       address: action.payload,
    //     },
    //   };
    // case types.SET_OWNER_PROPERTY_EDIT:
    //   return {
    //     ...state,
    //     propertyEdit: {
    //       ...state.propertyEdit,
    //       ownerId: action.payload,
    //     },
    //   };
    // case types.SET_PRICE_PROPERTY_EDIT:
    //   return {
    //     ...state,
    //     propertyEdit: {
    //       ...state.propertyEdit,
    //       price: action.payload,
    //     },
    //   };
    // case types.SET_INTERNAL_CODE_PROPERTY_EDIT:
    //   return {
    //     ...state,
    //     propertyEdit: {
    //       ...state.propertyEdit,
    //       codeInternal: action.payload,
    //     },
    //   };

    default:
      return state;
  }
};
