import React from "react";
import App from "next/app";
import HeaderPage from "./layout/header";
import 'primereact/resources/themes/mdc-light-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Provider } from "react-redux";
import { store } from "../state/store";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
      <HeaderPage>
          <Component {...pageProps} />
      </HeaderPage>
      </Provider>
      
    );
  }
}

export default MyApp;
