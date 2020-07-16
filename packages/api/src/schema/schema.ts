import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export default gql`
  type Query{
    hello: String!
  }
`