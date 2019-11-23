const { ApolloServer } = require("apollo-server-lambda");
const { resolvers, typeDefs } = require("./schemas");

const graphql = new ApolloServer({
  typeDefs,
  resolvers
}).createHandler({ cors: { origin: "*", credentials: true } });

module.exports.handler = graphql;
