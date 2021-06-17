export type Income = {
  id: string;
  amount: number;
  project: string;
  area: string;
  jira: string;
  invoice: string;
  due: string;
  paid: boolean;
  by: string;
  lastmodified: string;
  description: string;
  confirmed: boolean;
};

export type Project = {
  name: string;
  areas: string[];
  active: boolean;
};
