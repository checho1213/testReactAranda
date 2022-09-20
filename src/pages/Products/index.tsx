import React, { useEffect, useState } from "react";

import TitleComponent from "../Widget/TitleComponent";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "primereact/badge";
import {
  loadProducts,  
  loadProductsByFilter,  
  setOpenDetails,
  setProductEdit,  
} from "../../state/products/actions";
import { RootState } from "../../state/store";
import { IProduct} from "../../interfaces/state/product";
import SaveProperty from "./saveProduct";
import { Dropdown } from "primereact/dropdown";
import { loadCategories } from "../../state/categories/actions";

const ProductPage: NextPage = () => {
  const dispatch = useDispatch();
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  
  const categories = useSelector((state: RootState) => {
    return state.categories.categoryList;
  });
  
  useEffect(() => {
   dispatch(loadProducts());
  dispatch(loadCategories());
  }, []);

  const property = useSelector((state: RootState) => {
    return state.product.productList;
  });

  const open = useSelector((state: RootState) => {
    return state.product.openDialog;
  });

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;

    setGlobalFilterValue(value);
  };

  const onNameChange = (e: any) => {
    const value = e.target.value;
    setName(value);
  };

  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  };

  const newProduct = () => {
    dispatch(setOpenDetails(true));    
  };

  const renderHeader = () => {
    return (
      <div className="p-d-flex p-jc-between p-ai-center">
        <h5 className="p-m-0">Properties</h5>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const editProduct = (property_: IProduct) => {
    dispatch(setOpenDetails(true));    
    dispatch(setProductEdit(property_));
  };
  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          onClick={() => editProduct(rowData)}
          className="p-button-rounded p-button-primary p-mr-2"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
        />
      </React.Fragment>
    );
  };
  
  const header = renderHeader();
  const clickHandle = () => {
    debugger
    dispatch(loadProductsByFilter(name, description, selectedCategory  == undefined ? 0 :  selectedCategory));
  };
  const clickClearFilterHandle = () => {
    setName("");    
    
    //dispatch(loadProperties());
  };
  const onCategoryChange = (e: any) => {
    setSelectedCategory(e.value);
  };
  return (
    <div>
      <TitleComponent
        titlePrimary="Productos Dashboard"
        titleSecondary="Tablero donde se visualiza y administran los productos"
        newData={newProduct}
      ></TitleComponent>

      <Card>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col">
            <label htmlFor="firstname2">Nombre</label>
            <InputText
              id="firstname2"
              type="text"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div className="p-field p-col">
            <label htmlFor="lastname2">Descripción</label>
            <InputText
              id="lastname2"
              type="text"
              value={description}
              onChange={onDescriptionChange}
            />
          </div>
          <div className="p-field p-col">
            <label htmlFor="firstname2">Categoría</label>
            <Dropdown
              value={selectedCategory}
              options={categories}
              optionValue= "id"
              onChange={onCategoryChange}
              optionLabel="name"
              filter
              showClear
              filterBy="name"
              placeholder="Seleccione la categoría"              
            />
          </div>
        </div>
        <div className="p-grid">
            <div className="p-col-8"></div>
          <div className="p-col-2">
            <Button
              label="Buscar"
              onClick={clickHandle}
              style={{ width: "100%" }}
              icon="pi pi-search"
              iconPos="right"
            />
          </div>
          <div className="p-col-2">
            <Button
              onClick={clickClearFilterHandle}
              label="Limpiar campos"
              className="p-button-outlined"
              style={{ width: "100%" }}
              icon="pi pi-undo"
              iconPos="right"
            />
          </div>
        </div>
      </Card>

      <Card title="Resultados de la búsqueda">
        <DataTable
          value={property}
          responsiveLayout="scroll"
          paginator
          header={header}
          rowHover
          filterDisplay="menu"
          rowsPerPageOptions={[10, 25, 50]}
          globalFilterFields={["name", "description", "category"]}
          emptyMessage="No customers found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          dataKey="code"
          className="p-datatable-customers"
          showGridlines
          rows={10}
        >
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="buscar por nombre"
          ></Column>
          <Column
            field="description"
            header="Descripción"
            sortable
            filter
            filterPlaceholder="buscar por categoría"
          ></Column>
          <Column field="categoryName" header="Categoría"></Column>

          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ width: "120px" }}
          ></Column>
        </DataTable>
      </Card>
      <SaveProperty></SaveProperty>
    </div>
  );
};

export default ProductPage;
