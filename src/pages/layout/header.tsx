import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

import Router from "next/router";
import { NextPage } from "next";

const HeaderPage: NextPage = ({ children }) => {
  const gotoLink = (link: string) => {
    Router.push(link);
  };
  const items = [
    {
      label: "Productos",
      icon: "pi pi-fw pi-home",
      
      
    },    
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://arandasoft.com/wp-content/uploads/2021/02/logo-aranda-header.png"
      height="40"
      className="p-mr-2"
    ></img>
  );
  const end = <InputText placeholder="Search" type="text" />;
  return (
    <div>
      <Menubar model={items} start={start}></Menubar>
      {children}
    </div>
  );
};
export default HeaderPage;
