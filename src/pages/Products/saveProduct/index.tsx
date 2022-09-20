import React, { useEffect, useState, useRef } from "react";

import { Card } from "primereact/card";

import "primeflex/primeflex.css";
import { Button } from "primereact/button";

import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { RootState } from "../../../state/store";
import {
  createProduct,
  setOpenDetails,
  setProductCategory,
  setProductDescription,
  setProductName,
  updateProduct,
} from "../../../state/products/actions";

const SaveProduct: NextPage = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  useEffect(() => {}, []);

  const onCategoryChange = (e: any) => {
    dispatch(setProductCategory(e.value));
  };
  const open = useSelector((state: RootState) => {
    return state.product.openDialog;
  });
  const categories = useSelector((state: RootState) => {
    return state.categories.categoryList;
  });
  const product = useSelector((state: RootState) => {
    return state.product.productEdit;
  });
  const onInputChangeName = (e: any) => {
    const val = (e.target && e.target.value) || "";
    dispatch(setProductName(val));
  };
  const onInputChangeDescription = (e: any) => {
    const val = (e.target && e.target.value) || "";
    dispatch(setProductDescription(val));
  };
  const hideDialog = () => {
    dispatch(setOpenDetails(false));
  };  
  const propertyDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancelar"
        onClick={() => hideDialog()}
        icon="pi pi-times"
        className="p-button-text"
      />
      <Button
        label="Guardar"
        onClick={() => saveProduct()}
        icon="pi pi-check"
        className="p-button-text"
      />
    </React.Fragment>
  );

  const saveProduct = () => {    
    if(product.id > 0){
      dispatch(updateProduct(product));
    }
    else{      
      dispatch(createProduct(product));
    }
    hideDialog();
  };
  return (
    <div>
      <Dialog
        visible={open}
        style={{ width: "450px" }}
        header="Información del producto"
        modal
        className="p-fluid"
        footer={propertyDialogFooter}
        onHide={hideDialog}
      >
        <div className="p-field">
          <label htmlFor="name">Nombre</label>
          <InputText
            id="name"
            value={product.name}
            onChange={(e) => onInputChangeName(e)}
            required
            autoFocus
          />
        </div>
        <div className="p-field">
          <label htmlFor="name">Descripción</label>
          <InputText
            id="name"
            value={product.description}
            onChange={(e) => onInputChangeDescription(e)}
            required
          />
        </div>
        <div className="p-field">
          <label htmlFor="name">Categoría</label>
          <Dropdown
            value={product.categoryId}
            options={categories}
            onChange={onCategoryChange}
            optionValue="id"
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Seleccione la categoría"
          />
        </div>
      </Dialog>
    </div>
  );
};

export default SaveProduct;
