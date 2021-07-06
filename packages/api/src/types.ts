export type User = {
  name: string;
  surname: string;
  email: string;
  token: string;
  role: string;
  password: string;
};

export type Income = Record<string, string | number | boolean> & {
  id: string;
  amount: number;
  project: string;
  area: string;
  jira: string;
  invoice: string;
  due: string;
  paid: boolean;
  by: string;
  updatedAt: string;
  createdAt: string;
  description: string;
  confirmed: boolean;
};

export type Expense = Record<string, string | number | boolean> & {
  id: string;
  amount: number;
  project: string;
  area: string;
  jira: string;
  due: string;
  paid: boolean;
  by: string;
  updatedAt: string;
  createdAt: string;
  description: string;
  confirmed: boolean;
};

export type External = Record<string, string | number | boolean> & {
  id: string;
  name: string;
  amount: number;
  project: string;
  area: string;
  jira: string;
  due: string;
  paid: boolean;
  by: string;
  updatedAt: string;
  createdAt: string;
  description: string;
  confirmed: boolean;
};
