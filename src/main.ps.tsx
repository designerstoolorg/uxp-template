import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import { entrypoints, host } from "uxp";
import { ShowEvent } from "../types/app";
import { App } from "./App";

let panel: HTMLDivElement | null = null;

const createRoot = () => {
  panel = document.createElement("div");
  panel.id = "panel";
  ReactDOM.render(
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html,body,#panel{
  height: 100%;
  color: #fff;
}
`,
        }}
      />
      {/* render platform independent UI */}
      <App name={host.name} uiLocale={host.uiLocale} version={host.version} />
    </>,
    panel
  );
  return panel;
};

const show = (event: ShowEvent) => {
  if (!panel) panel = event.node.appendChild(createRoot());
};

entrypoints.setup({
  plugin: {
    create(plugin: any) {
      /*optional */ console.log("plugin:created", plugin);
    },
    destroy() {
      /*optional */ console.log("plugin:destroyed");
    },
  },
  panels: {
    uxpTemplateController: {
      create: () => console.log("create"),
      show: show,
      hide: () => console.log("hide"),
      destroy: () => console.log("destroy"),
      invokeMenu: () => console.log("invokeMenu"),
    },
  },
});
