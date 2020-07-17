export interface IProject {
  id: { $oid: string };
  name: string;
  description: string;
}

export interface IBusinessUnit {
  _id: string;
  name: string;
  people: string;
}

export interface IExpenseType {
  _id: string;
  name: string;
}

export interface IIncome {
  _id: string;
  amount: number;
  project: IProject;
  date: string;
  description: string;
  due: string;
  profitcenter: IBusinessUnit;
}

export interface IExpense {
  _id: string;
  amount: number;
  project: IProject;
  date: string;
  description: string;
  due: string;
  costscenter: IBusinessUnit;
  type: IExpenseType;
}

export interface ExternalPersonnelExpense {
  _id: string;
  amount: number;
  project: IProject;
  date: string;
  description: string;
  due: string;
  costscenter: IBusinessUnit;
  personName: string;
}
