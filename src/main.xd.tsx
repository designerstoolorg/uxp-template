import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import { host } from "uxp";
import { ShowEvent } from "../types/app";
import { App } from "./App";
import { PanelExportObject } from "../types/app";
import { UpdateEvent, HideEvent } from "../types/app";

let panel: HTMLDivElement | null = null;

const createRootElement = () => {
  panel = document.createElement("div");
  panel.setAttribute("method", "dialog");
  panel.id = "panel";
  ReactDOM.render(
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
  html,.uxp-plugin,#panel{
    height: 100%
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
  if (!panel) panel = event.node.appendChild(createRootElement());
};

const panelObject: PanelExportObject = {
  show: (e: ShowEvent) => show(e),
  update: (e: UpdateEvent) => console.log("update", e),
  hide: (e: HideEvent) => console.log("hide", e),
};

module.exports.panels = {
  uxpTemplate: panelObject,
};

export interface CreatePanelReturns {
  /**
   * @var override the object to modify the event listener
   */
  $: PanelExportObject;
  /**
   * @var return the export object which will be use in `module.exports`
   */
  exports: PanelExportObject;
}
