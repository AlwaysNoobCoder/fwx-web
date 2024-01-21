/**
 * <h5>Meidas Enum</h5>
 */
export enum SEAMedia {
  /**
   * JSON
   */
  Json,
  /**
   * HTML Dom
   */
  Dom,
}

export interface MediaConverter {
  from: (v: NonNullable<unknown>) => NonNullable<unknown>
  to: (v: NonNullable<unknown>) => NonNullable<unknown>
}

export class SEAType {
  public static readonly String: SEAType = new SEAType(1, null)
  public static readonly Int: SEAType = new SEAType(2, null)
  protected constructor(
    public code: number,
    public cvs: Map<SEAMedia, MediaConverter> | null,
  ) {}
}

/**
 *
 */
export interface Selectable {
  source: NonNullable<unknown>
  candidates: NonNullable<unknown>[]
}

export type DynamicBoolean = boolean | (() => boolean)

export type DynamicString = string | (() => string)

export type DynamicNumber = number | (() => number)

/**
 * <h5>Field of SEA Entity</h5>
 * Our goal is to provide a centric place to drive the UI.
 */
export type SEAField = Partial<Selectable> & {
  /**
   *
   */
  type: SEAType
  /**
   *
   */
  label?: DynamicString
  /**
   * <p>Whether this field is required when creating and updating. </p>
   * <p>When a Function type was given, the implementing library should specify the concrete type of function arguments.
   */
  required?: DynamicBoolean
  /**
   * <p>Whether this field is required when creating and updating. </p>
   * <p>When a Function type was given, the implementing library should specify the concrete type of function arguments.
   */
  visible?: DynamicBoolean
  /**
   *<p>Whether this field can be inserted or updated. </p>
   *<p>When a Function type was given, the implementing library should specify the concrete type of function arguments.
   */
  updatable?: DynamicBoolean
}
