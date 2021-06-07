export type Income = {
  id: string;
  amount: number;
  project: string;
  area: string;
  jira: string;
  factura: string;
  due: string;
  paid: boolean;
  by: string;
  lastmodified: string;
};

export type Project = {
  name: string;
  areas: string[];
  active: boolean;
};
