/**
 * @file
 * A more advanced example using D3 + JSDOM
 */

const { JSDOM } = require("jsdom");
const d3 = require("d3");

module.exports = (
  { data: { RestApiOne: data } },
  { width = 500, height = 500 } = {}
) => {
  const { window } = new JSDOM("<!DOCTYPE html><html><body></body></html>");

  const svg = d3
    .select(window.document.body)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("xmlns", "http://www.w3.org/2000/svg");

  const x = d3
    .scaleTime()
    .domain(d3.extent(data, d => new Date(d.datetime)))
    .range([0, width - 50]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - 20, 0]);

  const lineData = d3
    .line()
    .x(d => x(new Date(d.datetime)))
    .y(d => y(d.value))(data);

  svg
    .append("path")
    .attr("stroke", "steelblue")
    .attr("fill", "none")
    .attr("d", lineData);

  svg
    .append("g")
    .attr("transform", `translate(0, ${height - 20})`)
    .call(d3.axisBottom(x));

  svg
    .append("g")
    .attr("transform", `translate(${width - 50}, 0)`)
    .call(d3.axisRight(y));

  return window.document.body.innerHTML;
};
