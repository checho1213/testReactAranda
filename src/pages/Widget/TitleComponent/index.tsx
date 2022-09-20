import React, { Component } from "react";
import { Toolbar } from "primereact/toolbar";
import { NextPage } from "next";
import { Button } from "primereact/button";

interface Props {
  titlePrimary: string;
  titleSecondary: string;
  newData: () => void;
}
const TitleComponent: NextPage<Props> = ({ titlePrimary, titleSecondary, newData }) => {
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/";
      },
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {
        window.location.hash = "/fileupload";
      },
    },
  ];

  const leftContents = (
    <div>
      <div>
        <h1
          style={{
            marginBottom: "auto",
            color: "#491b9b",
            marginTop: "auto",
          }}
        >
          {titlePrimary}
        </h1>
      </div>
      <div>
        <h4
          style={{
            marginBottom: "auto",
            color: "#5a41e6",
            marginTop: "auto",
          }}
        >
          {titleSecondary}
        </h4>
      </div>
    </div>
  );

  const rightContents = <Button label="Nuevo" onClick={newData} icon="pi pi-check" />;

  return <Toolbar left={leftContents} right={rightContents} />;
};

export default TitleComponent;
