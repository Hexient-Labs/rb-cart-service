const { gql } = require('apollo-server')

const typeDefs = gql`
  type CartItem {
    productId: ID!
    quantity: Int!
  }

  type Cart {
    items: [CartItem!]!
  }

  input CartItemInput {
    productId: ID!
    quantity: Int!
  }

  type Query {
    cartForCurrentUser: Cart!
  }

  type Mutation {
    addItemToCart(cartItem: CartItemInput!): Cart!
  }
`

module.exports = typeDefs
