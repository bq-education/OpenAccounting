import { Model, model, Schema, Document } from "mongoose";
import { User } from "../types";

export const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    token: { type: String, default: "" },
    role: { type: [String], default: ["USER"], required: true },
    password: { type: String, required: true },
    authorized: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export type UserModelType = Document &
  User & {
    id: string;
  };

const UserModel: Model<UserModelType> = model<UserModelType>(
  "User",
  UserSchema
);

export default UserModel;
