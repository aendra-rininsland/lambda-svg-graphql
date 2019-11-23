/**
 * @file
 * Basic, string-based chart
 */

module.exports = ({ data }, { width = 500, height = 500 } = {}) => {
  const maxValue = Math.max(...data.RestApiOne.map(d => d.value));
  return `
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="${width}" 
    height="${height}">
  <g transform="translate(0, ${height})">
  ${data.RestApiOne.map(
    ({ datetime }, i, a) =>
      `<text x="${(width / a.length) * i}">${datetime}</text>`
  )}
  </g>
  <g>
  ${data.RestApiOne.map(({ value }, i, a) => {
    const barHeight = (height * value) / maxValue - 20;
    return `<rect x="${(width / a.length) * i}" y="${height -
      barHeight -
      20}" width="${width / a.length -
      10}" height="${barHeight}" fill="steelblue" />`;
  })}
  </g>
  </svg>`;
};
