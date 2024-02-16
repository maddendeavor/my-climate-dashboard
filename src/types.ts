type AngleMeasurements = {
    startAngle: number;
    endAngle: number;
  }
  
type Coordinates = {
    x: number;
    y: number
}  

type DemandData = {
    current: number;
    thresholdLow: number;
    thresholdHigh: number;
    average: number
}

export type { AngleMeasurements, Coordinates, DemandData }