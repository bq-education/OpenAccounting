import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export default gql`
  scalar ObjectID
  type Project {
    id: ObjectID!
    name: String!
    description: String!
  }
  input ProjectInput {
    name: String!
    description: String!
  }
  type Query {
    test: String!
    projects: [Project!]!
  }

  type Mutation {
    addProjects(projects: [ProjectInput!]!): [ObjectID!]!
  }
`;
