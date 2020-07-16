import { Application } from "./deps.ts";
import { config } from "./deps.ts";
import { MongoClient } from "./deps.ts";
import { applyGraphQL, GQLError } from "./deps.ts";
import Schema from "./schema/schema.ts";
import Query from "./resolvers/Query.ts";

const env = config();

const app = new Application();
const resolvers = {
  Query,
};

const client = new MongoClient();

client.connectWithUri(env.MONGO_URL);
const db = client.database(env.MONGO_DB_NAME);
console.log(`Connected to ${env.MONGO_URL}/${env.MONGO_DB_NAME}`);

const context = { db };

const GraphQLService = await applyGraphQL({
  path: "/graphql",
  typeDefs: Schema,
  resolvers,
  context: (ctx) => {
    return context;
  },
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server start at http://localhost:4000");
await app.listen({ port: 4000 });
// const projects = db.collection<IProject>("projects");

// const project: Partial<IProject> = {
//   name: "Nombre Proyecto",
//   description: "Descripción Proyecto",
// };
// const insertProject = await projects.insertOne(project);
// const findAll: Array<Partial<IProject>> = await projects.find({
//   _id: { $oid: "5f10746000400d6600de6c1a" },
// });
// console.log(findAll);
