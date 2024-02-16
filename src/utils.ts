import { AngleMeasurements, Coordinates } from "./types"

export const getMeterDimensions = (numSections: number): AngleMeasurements[] => {
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

export const getIndicatorCoordinates = (ratio: number): Coordinates => {
  const angle = Math.PI * ratio
  const r = 70
  return { x:  -r * Math.cos(angle) as number, y: -r * Math.sin(angle)}
}

export const toPercent = (decimal: number): string => {
  return `${Math.floor(decimal*100)}%`
}