
type Triggers = Array<'hover' | 'click' | 'focus' | 'touch'>;

type Placement = 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';

export interface Options {
  content?: string | boolean;

  /**
   * Popper placement
   * @default 'bottom'
   */
  placement?: Placement;

  html: boolean;

  /**
   * Array of events triggering the popper.
   */
  triggers: Triggers,
  /**
   * Array of events triggering the popper applied on the popper container itself.
   */
  popperTriggers: Triggers,

  /**
   * Virtual padding in the `boundary` used to prevent the popper overflow (pixels).
   */
  overflowPadding: number,

  /**
   * Show/Hide delay, or object in ms.
   */
  delay: number,

  /**
   * Emitted when the content size changes. You must set the `handleResize` prop to true.
   */
  handleResize: boolean,
  /**
   * Hide the popper if clicked outside.
   */
  autoHide: boolean;
  /**
   * Boolean: skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.
   */
  instantMove: boolean;
  /**
   * Boolean: prevent the popper from overflowing the `boundary` by using an opposite placement if needed.
   */
  flip: boolean,
  /**
   * Padding of the arrow relative to the popper bounds to prevent it from overflowing if you have rounded borders on the popper (pixels).
   */
  arrowPadding: number,
  /**
   * let floating vue resize the popper inner container to the available size (using `max-width` and `max-height`).
   * It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.
   */
  autoBoundaryMaxSize: boolean;
  /**
   * Quick way to add one-time classes to the popper container, for example to limit its width in a specific situation.
   */
  popperClass: string
  /**
   * Same as `content`, used when the actual tooltip content is loading.
   */
  loadingContent: string;
  /**
   * Distance along the main axis relative to the reference (pixels).
   */
  distance: number;

  /**
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
   */
  shift: boolean;
  /**
   * DOM element for the popper position and size boundaries.
   */
  boundary: any;
  /**
    *Selector: Container where the popper will be appended (e.g. 'body').
    */
  container: any;
  /**
   * Skidding along the cross axis relative to the reference (pixels).
   */
  skidding: number;
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
