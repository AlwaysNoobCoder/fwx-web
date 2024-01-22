import { FilterOperator } from './api'

/**
 * <h5>Meidas Enum</h5>
 */
export enum SEAMedia {
  /**
   * JSON Media
   */
  Json,
  /**
   * HTML DOM Media
   */
  Dom,
}

/**
 * <h5>Meida Converter</h5>
 */
export interface MediaConverter {
  from: (v: NonNullable<unknown>) => NonNullable<unknown>
  to: (v: NonNullable<unknown>) => NonNullable<unknown>
}

/**
 * <h5>SEAType Class</h5>
 */
export class SEAType {
  public static readonly String: SEAType = new SEAType(1, null, [
    FilterOperator.EQ,
    FilterOperator.NEQ,
    FilterOperator.SW,
    FilterOperator.NSW,
    FilterOperator.EW,
    FilterOperator.NEW,
    FilterOperator.CT,
    FilterOperator.NCT,
  ])
  public static readonly Int: SEAType = new SEAType(2, null, [
    FilterOperator.EQ,
    FilterOperator.NEQ,
    FilterOperator.GT,
    FilterOperator.GTE,
    FilterOperator.LT,
    FilterOperator.LTE,
    FilterOperator.BT,
    FilterOperator.NBT,
  ])
  protected constructor(
    public code: number,
    public cvs: Map<SEAMedia, MediaConverter> | null,
    public defaultFilterOperators: FilterOperator[],
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
