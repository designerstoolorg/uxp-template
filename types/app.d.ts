import { RootNode } from "scenegraph";

export interface UpdateEvent {
  editContext: RootNode;
  focusedArtboard: null;
  hasArtboards: false;
  hasArtwork: false;
  insertionParent: RootNode;
  items: any[];
  itemsIncludingLocked: [];
}

export interface ShowEvent {
  node: Element;
  panel: any;
  panelId: string;
  returnValue: undefined;
  target: any;
  type: "uxpshowpanel";
}
export type HideEvent = ShowEvent;

export type UpdateEventFn = (event: UpdateEvent) => void;
export type ShowEventFn = (event: ShowEvent) => void;
export type HideEventFn = (event: HideEvent) => void;

export interface PanelExportObject {
  show: (event: ShowEvent) => void;
  update: (event: UpdateEvent) => void;
  hide: (event: HideEvent) => void;
}
