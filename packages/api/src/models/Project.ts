import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";

class Project extends Model {
  static table = "projects";
  static timestamps = true;
  static fields = {
    _id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: DataTypes.STRING,
  };
}

export { Project as default };
