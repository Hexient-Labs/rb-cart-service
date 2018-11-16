const faker = require('faker')

const getProductId = () => faker.random.uuid()

const getQuantity = () => faker.random.number()

const createCartItem = overrides => ({
  productId: getProductId(),
  quantity: getQuantity(),
  ...overrides,
})

const createCart = ({ numberOfCartItems = 3, cartItem = createCartItem() }) => {
  return {
    items: new Array(numberOfCartItems)
      .fill({})
      .map(createCartItem)
      .concat(cartItem),
  }
}

module.exports = {
  createCart,
}
