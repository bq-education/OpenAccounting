import { Model, model, Schema, Document, ObjectId } from "mongoose";
import { External } from "../types";

export const ExternalSchema: Schema = new Schema(
  {
    name: { type: String, required: true, default: "" },
    amount: { type: Number, required: true, unique: false },
    project: { type: String, required: true, default: "" },
    area: { type: String, required: true, default: "" },
    jira: { type: String, default: "", required: false },
    due: { type: Date, required: true },
    paid: { type: Boolean, required: true },
    by: { type: String, required: true },
    description: { type: String, required: true },
    confirmed: { type: Boolean, required: true, default: false },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export type ExternalModelType = Document &
  External & {
    id: string;
  };

const ExternalModel: Model<ExternalModelType> = model<ExternalModelType>(
  "External",
  ExternalSchema
);

export default ExternalModel;
