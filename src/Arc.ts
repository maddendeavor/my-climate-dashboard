import * as d3 from 'd3'

type AngleMeasurements = {
  startAngle: number;
  endAngle: number;
}

const getMeterDimensions = (numSections: number): AngleMeasurements[] => {
  const angle = Math.PI/numSections
  const meter = [] as AngleMeasurements[]

  for (let i = 0; i < numSections; i++) {
    meter.push({
      startAngle: -Math.PI/2 + i * angle,
      endAngle: -Math.PI/2 + (i+1) * angle
    })
  }
  return meter
}

export const Arc = () => {
const width = 200;
const height = width;

const svg = d3.create("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("style", "width: 10%; height: auto;");

const container = svg.append("g")
  .attr("transform", `translate(${width/2}, ${height/2})`); // move origin to center


const arcData = getMeterDimensions(6)
const colorScale = d3.scaleOrdinal(d3.schemeRdYlGn[6])


const ratio = 0.3
const angle = Math.PI * ratio
const r = 70
const x2 = r * Math.cos(angle)
const y2 = r * Math.sin(angle)

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
        .attr("x2", -x2)
        .attr("y2", -y2); 

  return svg.node()
}