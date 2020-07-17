import { IProject } from "../types/types.ts";
import { Database, Collection, ObjectId } from "../deps.ts";

interface IAddProjectsArgs {
  projects: Array<Partial<IProject>>;
}

export default {
  addProjects: async (
    parent: any,
    args: IAddProjectsArgs,
    ctx: any
  ): Promise<Array<ObjectId>> => {
    const projects: Array<Partial<IProject>> = args.projects;
    const db: Database = ctx.db;
    const projectsCollection: Collection<IProject> = db.collection<IProject>(
      "projects"
    );
    console.log("hola");
    const result = await projectsCollection.insertMany(projects);
    console.log(result);
    return result;
  },
};
