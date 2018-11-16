const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
  playground: false,
})

server.listen().then(({ url }) => {
  console.log(`Seagulls being annoying at ${url}`)
})
