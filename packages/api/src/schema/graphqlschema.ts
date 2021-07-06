import { gql } from "apollo-server";

const typedefs = gql`
  directive @auth(roles: [Role!]) on FIELD_DEFINITION | FIELD

  scalar Date
  
  enum Role {
    ADMIN
    ACCOUNTING
  }

  type User {
    id: String!
    email: String!
    name: String!
    surname: String!
    token: String!
    role: [Role!]!
  }

  input UserInput {
    name: String!
    surname: String!
    email: String!
    role: [Role!]
    password: String!
  }

  input UpdateUserInput {
    name: String
    surname: String
    email: String
    role: [Role!]
    password: String
  }
  type Income {
    id: ID!;
    amount: Float!;
    project: String!;
    area: String!;
    jira: String!;
    invoice: String!;
    due: Date!;
    paid: Boolean;
    by: User!;
    updatedAt: Date!;
    createdAt: Date!;
    description: Date!;
    confirmed: Boolean;
};
    createdBy: User!
    lastUpdatedBy: User!
  }

  
  type Query {
    test: String!
  
    getUser(email: String!): User @auth(roles: [ADMIN])
    getUsers: [User!]! @auth(roles: [ADMIN])
    getMe(email: String!, token: String!): User @auth(roles: [ACCOUNTING])

    getIncome(): [Income!]!: @auth(roles: [ACCOUNTING, ADMIN])
  }

  type Mutation {
    addUser(user: UserInput!): User! @auth(roles: [ADMIN])
    updateUser(email: String!, user: UpdateUserInput!): User!
      @auth(roles: [ADMIN])
    setUserRoles(email: String!, role: [Role!]!): User! @auth(roles: [ADMIN])
    deleteUser(email: String!): OKResponse! @auth(roles: [ADMIN])
    login(email: String!, password: String!): User

    addIncome(income: IncomeInput!): Income! @auth(roles:[ADMIN, ACCOUNTING])
    updateIncome(id: ID!, income: IncomeInput!): Income! @auth(roles:[ADMIN, ACCOUNTING])
    deleteIncome(id: ID!): Boolean! @auth(roles:[ADMIN, ACCOUNTING])
  }
`;

export default typedefs;
