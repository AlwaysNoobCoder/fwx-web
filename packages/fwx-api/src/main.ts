/**
 * <h5>Filter Operator</h5>
 */
export enum Operator {
  EQ = 1,
  NEQ = 2,
  GT = 3,
  GTE = 4,
  LT = 5,
  LTE = 6,
  SW = 7,
  NSW = 8,
  CT = 9,
  NCT = 10,
  EW = 11,
  NEW = 12,
  BT = 13,
  NBT = 14,
  NIL = 15,
  NNI = 16,
}

/**
 * <h5>Filter Logic</h5>
 */
export enum Logic {
  /**
   * AND grouped filters
   */
  AND = 1,
  /**
   * OR grouped filters
   */
  OR = 2,
}

export type Filter = SingleFilter | GroupFilter

/**
 * <h5>Single Filter</h5>
 */
export class SingleFilter {
  /**
   *
   * @param type
   * @param field
   * @param operator
   */
  private constructor(
    /**
     * <h5>Filter Type</h5>
     */
    public readonly type: string,
    /**
     * <h5>Filter Field</h5>
     */
    public readonly field: string,
    /**
     * <h5>Filter Operator</h5>
     */
    public readonly operator: Operator,
  ) {}
}

/**
 * <h5>Single Filter</h5>
 */
export class GroupFilter {
  private constructor(
    public readonly logic: Logic,
    public readonly filters: Filter[],
  ) {}
}

export const StringOperators: Operator[] = [Operator.EQ, Operator.NEQ]

/**
 * <h5>Sort Directions</h5>
 */
export enum SortDirection {
  ASC = 1,
  DESC = 2,
}

/**
 *
 */
export type Sort = {
  field: string
  direction: SortDirection
}

/**
 * <h5>Pagination</h5>
 */
export interface Pageable {
  skip: number
  take: number
}

export type SEARequest = Partial<Pageable> & {
  filter?: Filter
  sort?: Sort[]
  includes?: string[]
}

export type SEAResponse = {
  success: boolean
  data: Array<object>
  emsg: string
}
