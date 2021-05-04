import { config } from "dotenv";
config();

import { ApolloServer } from "apollo-server";
import { AuthDirective } from "./controllers/AuthDirective";

import mongoose from "mongoose";

try {
  const PORT = process.env.API_PORT;
  const mongoUrl: string = process.env.MONGO_URL as string;

  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.info("Mongo Database connected");

    // const server = new ApolloServer({
    //   typeDefs,
    //   resolvers,
    //   schemaDirectives: {
    //     auth: AuthDirective,
    //   },
    //   context: async ({ req, res }) => {
    //     const token = req.headers.authorization;
    //     const currentUser: Partial<IUser> = await UserModel.findOne({ token });
    //     return { user: currentUser, res, req };
    //   },
    // });

    // server.listen({ port: PORT }).then(({ url }) => {
    //   console.info(`🚀  Server ready at ${url}`);
    // });
  });
} catch (e) {
  console.error(e);
}
