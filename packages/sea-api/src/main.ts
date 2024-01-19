export enum Operator {
  EQ = 1,
  NEQ = 2,
  GT = 3,
  GTE = 4,
}

export type Filter = {
  field: string;
  operator: Operator;
};

export const StringOperators: Operator[] = [EQ, NEQ];
