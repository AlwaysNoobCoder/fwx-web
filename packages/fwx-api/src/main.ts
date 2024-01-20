/**
 * <h2></h2>
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

export enum Logic {
  AND = 1,
  OR = 2,
}

export enum Sort {
  ASC = 1,
  DESC = 2,
}

export type Filter = SingleFilter | GroupFilter

export class SingleFilter {
  private constructor(
    public field: string,
    public operator: Operator,
  ) {}
}

export class GroupFilter {
  private constructor(
    public logic: Logic,
    public filters: Filter,
  ) {}
}

export const StringOperators: Operator[] = [Operator.EQ, Operator.NEQ]
