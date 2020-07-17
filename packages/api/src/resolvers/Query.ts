import { IProject } from "../types/types.ts";
import { MongoClient, Database, Collection } from "../deps.ts";

export default {
  test: async (parent: any, args: any, ctx: any): Promise<string> => {
    return "working";
  },
  projects: async (
    parent: any,
    args: any,
    ctx: any
  ): Promise<Array<Partial<IProject>>> => {
    const db: Database = ctx.db;
    const projects: Collection<IProject> = db.collection<IProject>("projects");
    return await projects.find({});
  },
};
