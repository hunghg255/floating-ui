
type Triggers = Array<'hover' | 'click' | 'focus' | 'touch'>;

type Placement = 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';

export interface Options {
  content?: string | boolean;
  /**
   * Popper placement
   * @default 'top'
   */
  placement?: Placement;
  /**
   * Enable HTML content in directive
   * @default false
   */
  html: boolean;
  /**
   * Array of events triggering the popper.
   * @default ['hover', 'focus', 'touch']
   */
  triggers: Triggers;
  /**
   * Array of events triggering the popper.
   * @default []
   */
  popperTriggers: Triggers;
  /**
   * Virtual padding in the `boundary` used to prevent the popper overflow (pixels).
   * @default 0
   */
  overflowPadding: number;
  /**
   * Show/Hide delay, or object in ms.
   * @default { show: 200, hide: 0 }
   */
  delay?: number | {
    show?: number,
    hide?: number,
  },
  /**
   * Emitted when the content size changes. You must set the `handleResize` prop to true.
   * @default false
   */
  handleResize: boolean;
  /**
   * Hide the popper if clicked outside.
   */
  autoHide: boolean;
  /**
   * Boolean: skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.
   * @default false
   */
  instantMove: boolean;
  /**
   * Prevent overflow
   * @default true
   */
  preventOverflow: boolean;
  /**
   * Auto destroy tooltip DOM nodes (ms)
   * @default 5000
   */
  disposeTimeout: number;
  /**
   * Boolean: prevent the popper from overflowing the `boundary` by using an opposite placement if needed.
   * @default true
   */
  flip: boolean;
  /**
   * Padding of the arrow relative to the popper bounds to prevent it from overflowing if you have rounded borders on the popper (pixels).
   * @default 0
   */
  arrowPadding: number;
  /**
   * let floating vue resize the popper inner container to the available size (using `max-width` and `max-height`).
   * It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.
   */
  autoBoundaryMaxSize: boolean;
  /**
   * Quick way to add one-time classes to the popper container, for example to limit its width in a specific situation.
   */
  popperClass: string;
  /**
   * Same as `content`, used when the actual tooltip content is loading.
   */
  loadingContent: string;
  /**
   * Distance along the main axis relative to the reference (pixels).
   * @default 5
   */
  distance: number;
  /**
   * Positioning strategy
   * @default absolute
   */
  strategy: 'absolute' | 'fixed';
  /**
   * Id used for the aria-describedby attribute. By default a random id.
   */
  ariaId: string;
  /**
   * Boolean: disable the auto focus on the popper DOM node when shown.
   */
  noAutoFocus: boolean;
  /**
   * Boolean: prevent the popper from overflowing the boundary by adjusting its position.
   * @default true
   */
  shift: boolean;
  /**
   * DOM element for the popper position and size boundaries.
   * @default undefined
   */
  boundary: any;
  /**
    *Selector: Container where the popper will be appended (e.g. 'body').
    @default 'body'
    */
  container: any;
  /**
   * Skidding along the cross axis relative to the reference (pixels).
   * @default 0
   */
  skidding: number;
  /**
   * Compute arrow overflow (useful to hide it)
   * @default true
   */
  arrowOverflow: boolean;
  /**
   * Disable popper components
   * @default false
   */
  disabled: boolean;
  /**
   * By default, compute autohide on 'click'.
   * @default false
   */
  autoHideOnMousedown: boolean;

  // Tooltip specific options
  /**
   * Close tooltip on click on tooltip target
   * @default events => [...events, 'click']
   */
  hideTriggers: (events: any) => any[];
  /**
   *
   *  a function that returns the target HTML elements that should trigger the popper
   */
  targetNodes: () => Element[];
}

export interface Modifiers {
  /**
   * modifiers: { arrow: { options: { padding: 12 } } }
   * https://floating-vue.starpad.dev/guide/component#arrow-padding
   */
}
