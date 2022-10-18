import { PanelExportObject } from "../../types/app";
import { ShowEvent, UpdateEvent, HideEvent } from "../../types/app";
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

const emptyEvent = () => {};

export const createXdPanel = ({
  show = emptyEvent,
  update = emptyEvent,
  hide = emptyEvent,
}: Partial<PanelExportObject>): CreatePanelReturns => {
  // override the object to modify the event listener
  const fallback = { show, update, hide };

  const exports: PanelExportObject = {
    show: (e: ShowEvent) => fallback.show(e),
    update: (e: UpdateEvent) => fallback.update(e),
    hide: (e: HideEvent) => fallback.hide(e),
  };
  return { $: fallback, exports };
};
