import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import { ConfigProvider } from "antd";
import ptBr from "antd/lib/locale/pt_BR";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBr}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
