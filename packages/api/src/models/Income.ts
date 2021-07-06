import { Model, model, Schema, Document, ObjectId } from "mongoose";
import { Expense } from "../types";

export const ExpenseSchema: Schema = new Schema(
  {
    amount: { type: Number, required: true, unique: false },
    project: { type: String, required: true, default: "" },
    area: { type: String, required: true, default: "" },
    jira: { type: String, default: "", required: false },
    invoice: { type: String, required: true },
    due: { type: Date, required: true },
    paid: { type: Boolean, required: true },
    by: { type: String, required: true },
    description: { type: String, required: true },
    confirmed: { type: Boolean, required: true, default: false },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export type ExpenseModelType = Document &
  Expense & {
    id: string;
  };

const ExpenseModel: Model<ExpenseModelType> = model<ExpenseModelType>(
  "Expense",
  ExpenseSchema
);

export default ExpenseModel;
