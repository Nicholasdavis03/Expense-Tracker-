const typeDefs = `

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  
  type Transaction {
    _id: ID
    type: String
    amount: Float
    description: String
    date: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    statement: Transaction
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addTransaction(type: String!, amount: Float!, description: String!, date: Int!): Transaction
    removeTransaction(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
