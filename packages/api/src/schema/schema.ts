import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export default gql`
  type Project {
    _id: String!
    name: String!
    description: String!
  }
  type Query {
    test: String!
    projects: [Project!]!
  }
`;
