/**
 * @file
 * Graphql schemas and whathaveyou
 *
 * Example query:
 * {
 *   RestApiOne(startDate: "2019-01-01", endDate:"2019-03-01") {
 *     datetime
 *     value
 *   }
 * }
 *
 */

const { gql } = require("apollo-server-lambda");

const Query = gql`
  type Query {
    RestApiOne(startDate: String, endDate: String): [RestApiOneResult]
  }
  type RestApiOneResult {
    datetime: String
    value: Float
  }
`;

const queryResolvers = {
  RestApiOne: (obj, { startDate = new Date(), endDate = new Date() }) => {
    return require("../data.json").filter(d => {
      const datetime = new Date(d.datetime);
      return datetime >= new Date(startDate) && datetime <= new Date(endDate);
    });
  }
};

module.exports.typeDefs = [Query];

module.exports.resolvers = {
  Query: {
    ...queryResolvers
  }
};
