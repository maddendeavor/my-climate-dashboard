import * as d3 from 'd3'
import { getMeterDimensions } from './utils';
import { Coordinates } from './types';

export const Arc = ({x, y}: Coordinates) => {
  const width = 200;
  const height = width;

  const svg = d3.create("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("style", "width: 100%; height: auto;");

  const container = svg.append("g")
    .attr("transform", `translate(${width/2}, ${height*0.75})`); // move origin to center


  const arcData = getMeterDimensions(6)
  const colors = d3.schemeRdYlGn[6].map(c => c).reverse()
  const colorScale = d3.scaleOrdinal(colors)

  const arc = d3.arc()
    .startAngle(d => d.startAngle)
    .endAngle(d => d.endAngle)		
    .innerRadius(width/4)
    .outerRadius(width/2 - 1);		

  container.append('g')
    .selectAll('g')
    .data(arcData)
    .join('g')
    .call(g => g.append("path")
      .attr("fill", (d, i) => colorScale(i))
      .attr("stroke", "none")	
      .attr('d', arc))

  container.append('line')
      .style("stroke", "black")
        .style("stroke-width", 5)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", y); 

  return svg.node()
}