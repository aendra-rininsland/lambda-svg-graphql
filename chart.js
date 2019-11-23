/**
 * @file
 * Generates charts
 */

const Axios = require("axios");
const basicChart = require("./charts/basic");
const advancedChart = require("./charts/advanced");

const response = {
  statusCode: 200,
  headers: {
    "Content-Type": "image/svg+xml"
  }
};

module.exports.handler = async ({ queryStringParameters, pathParameters }) => {
  const { start = "2019-01-01", end = "2019-12-01" } =
    queryStringParameters || {};

  const { config } = pathParameters || {};

  if (!config)
    return {
      statusCode: 500
    };

  const { data } = await Axios.post("http://localhost:3000/data", {
    query: ` 
    {
      RestApiOne(startDate: "${start}", endDate:"${end}") {
        datetime
        value
    }
  }`
  });

  switch (config) {
    case "advanced":
      return {
        body: advancedChart(data),
        ...response
      };
    case "basic":
    default:
      return {
        body: basicChart(data),
        ...response
      };
  }
};
