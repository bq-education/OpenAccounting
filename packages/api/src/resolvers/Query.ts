import { IProject } from "../types/types.ts";
import { MongoClient, Database, Collection } from "../deps.ts";

export default {
  hello: async (parent: any, app: any, ctx: any): Promise<string> => {
    // const db: Database = ctx.db;
    // const projects: Collection<IProject> = db.collection<IProject>("projects");

    // const findAll: Array<Partial<IProject>> = await projects.find({
    //   _id: { $oid: "5f10746000400d6600de6c1a" },
    // });
    // return findAll[0].name!;
    return "hello";
  },
};
