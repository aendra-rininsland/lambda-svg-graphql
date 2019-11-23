# Serverless + GraphQL + SVG Talk code example

## 2019 Ændrew Rininsland ([@aendrew][twitter])

This is all the code from my November 2019 talk at [Trending.JS][meetup].

Here's what you should look at if you want to recreate something like this:

- _serverless.yaml_: All the AWS Lambda config is in this. You'll need to tweak this to deploy
- _data.js_: This is the GraphQL data handler for Serverless.
  It consumes mock data from _data.json_; normally you'd make requests to an API instead.
- _chart.js_: This is the chart handler. It takes one path parameter, `config`, to
  fork between the `basic` and the `advanced` chart examples (both in `/charts`).
- _/charts_: The actual chart generation code.
  - `basic.js` returns a simple SVG string.
  - `advanced.js` uses JSDOM + D3 to create a more realistic example.
- _schemas.js_: GraphQL schemas. I've made these really trivial by design.

[twitter]: https://www.twitter.com/aendrew
[meetup]: https://www.meetup.com/Burns-Sheehan-London-Events/events/266017702/
