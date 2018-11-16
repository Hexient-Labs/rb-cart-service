const { createCart } = require('../lib/factories/cart')

const resolvers = {
  Mutation: {
    addItemToCart: (_, { cartItem }) =>
      createCart({ numberOfCartItems: 0, cartItem }),
  },
  Query: {
    cartForCurrentUser: () => createCart({ numberOfCartItems: 4 }),
  },
}

module.exports = resolvers
