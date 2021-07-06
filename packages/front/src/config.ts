import { IColumn, InputType, Project } from "./types";

export const projects: Project[] = [
  {
    name: "RetoTech",
    areas: ["Coordinacion", "Formación", "Materiales", "Festival", "Otros"],
    active: true,
  },
  {
    name: "DigiCraft ES",
    areas: ["Contenidos", "Desarrollo", "Formación", "Kits", "Otros"],
    active: true,
  },
  {
    name: "DigiCraft RU",
    areas: ["Contenidos/Traducción", "Desarrollo", "Otros"],
    active: true,
  },
];

export const expenseColumns: IColumn[] = [
  {
    name: "Cantidad",
    key: "amount",
    attributes: {
      type: "number",
      width: "120px",
      step: "any",
    },
    shortable: false,
    type: InputType.NUMBER,
  },
  {
    name: "Proyecto",
    key: "project",
    attributes: {
      width: "150px",
      selected: projects[0].name,
    },
    options: projects.map((p) => p.name),

    shortable: true,
    type: InputType.SELECT,
  },
  {
    name: "Área",
    key: "area",
    attributes: {
      width: "150px",
      selected: projects[0].areas[0],
    },
    options: projects.map((p) => p.name),
    shortable: false,
    type: InputType.SELECT,
  },
  {
    name: "JIRA",
    key: "jira",
    attributes: {
      width: "250px",
      type: "url",
    },
    shortable: true,
    type: InputType.URL,
  },
  {
    name: "Vencimiento",
    key: "due",
    attributes: { width: "165px", type: "date" },
    shortable: true,
    type: InputType.DATE,
  },
  {
    name: "Pagado",
    key: "paid",
    attributes: { width: "100px" },
    shortable: true,
    type: InputType.BOOLEAN,
  },
  {
    name: "Descripción",
    key: "description",
    attributes: { width: "300px" },
    shortable: false,
    type: InputType.STRING,
  },
  {
    name: "Confirmado",
    key: "confirmed",
    attributes: { width: "100px" },
    type: InputType.BOOLEAN,
    shortable: true,
  },
  {
    name: "",
    key: "actions",
    attributes: { width: "100px" },
    shortable: false,
  },
];

export const incomeColumns: IColumn[] = [
  {
    name: "Cantidad",
    key: "amount",
    attributes: {
      type: "number",
      width: "120px",
      step: "any",
    },
    shortable: false,
    type: InputType.NUMBER,
  },
  {
    name: "Proyecto",
    key: "project",
    attributes: {
      width: "150px",
      selected: projects[0].name,
    },
    options: projects.map((p) => p.name),

    shortable: true,
    type: InputType.SELECT,
  },
  {
    name: "Área",
    key: "area",
    attributes: {
      width: "150px",
      selected: projects[0].areas[0],
    },
    options: projects.map((p) => p.name),
    shortable: false,
    type: InputType.SELECT,
  },
  {
    name: "JIRA",
    key: "jira",
    attributes: {
      width: "150px",
      type: "url",
    },
    shortable: true,
    type: InputType.URL,
  },
  {
    name: "Nº Factura",
    key: "invoice",
    attributes: {
      width: "100px",
    },
    shortable: true,
    type: InputType.STRING,
  },
  {
    name: "Vencimiento",
    key: "due",
    attributes: { width: "165px", type: "date" },
    shortable: true,
    type: InputType.DATE,
  },
  {
    name: "Cobrado",
    key: "paid",
    attributes: { width: "100px" },
    shortable: true,
    type: InputType.BOOLEAN,
  },
  {
    name: "Descripción",
    key: "description",
    attributes: { width: "300px" },
    shortable: false,
    type: InputType.STRING,
  },
  {
    name: "Confirmado",
    key: "confirmed",
    attributes: { width: "100px" },
    type: InputType.BOOLEAN,
    shortable: true,
  },
  {
    name: "",
    key: "actions",
    attributes: { width: "100px" },
    shortable: false,
  },
];

export const externalColumns: IColumn[] = [
  {
    name: "Cantidad",
    key: "amount",
    attributes: {
      type: "number",
      width: "120px",
      step: "any",
    },
    shortable: false,
    type: InputType.NUMBER,
  },
  {
    name: "Nombre/Empresa",
    key: "name",
    attributes: {
      type: "text",
      width: "140px",
    },
    shortable: true,
    type: InputType.STRING,
  },
  {
    name: "Proyecto",
    key: "project",
    attributes: {
      width: "140px",
      selected: projects[0].name,
    },
    options: projects.map((p) => p.name),

    shortable: true,
    type: InputType.SELECT,
  },
  {
    name: "Área",
    key: "area",
    attributes: {
      width: "140px",
      selected: projects[0].areas[0],
    },
    options: projects.map((p) => p.name),
    shortable: false,
    type: InputType.SELECT,
  },
  {
    name: "JIRA",
    key: "jira",
    attributes: {
      width: "130px",
      type: "url",
    },
    shortable: true,
    type: InputType.URL,
  },
  {
    name: "Vencimiento",
    key: "due",
    attributes: { width: "165px", type: "date" },
    shortable: true,
    type: InputType.DATE,
  },
  {
    name: "Pagado",
    key: "paid",
    attributes: { width: "100px" },
    shortable: true,
    type: InputType.BOOLEAN,
  },
  {
    name: "Descripción",
    key: "description",
    attributes: { width: "300px" },
    shortable: false,
    type: InputType.STRING,
  },
  {
    name: "Confirmado",
    key: "confirmed",
    attributes: { width: "100px" },
    type: InputType.BOOLEAN,
    shortable: true,
  },
  {
    name: "",
    key: "actions",
    attributes: { width: "100px" },
    shortable: false,
  },
];
