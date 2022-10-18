import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const root = document.getElementById("root");

// render platform independent UI
ReactDOM.render(
  <App
    name="Web"
    uiLocale={navigator.language}
    version={navigator.appVersion}
  />,
  root
);
