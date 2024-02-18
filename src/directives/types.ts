import { Placement } from "../util/popper";

type Triggers = Array<'hover' | 'click' | 'focus' | 'touch'>;

export interface Options {
  content?: string | boolean;
  placement?: Placement;

  html: boolean;
  triggers: Triggers,
  popperTriggers: Triggers,
  overflowPadding: number,
  delay: number,
  handleResize: boolean,
  autoHide: boolean;
  instantMove: boolean;
  flip: boolean,
  arrowPadding: number,
  autoBoundaryMaxSize: boolean;
  popperClass: string
  loadingContent: string;
  targetNodes: () => Element[];
}

export interface Modifiers {
  preventOverflow: boolean;
  overflowPadding: number;
  shiftCrossAxis: boolean;
}
