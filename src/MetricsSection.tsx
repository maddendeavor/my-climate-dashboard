import { useEffect, useRef, useState } from 'react'
import { Box, HStack, Spinner} from '@chakra-ui/react'
import { Coordinates, EnergyMetrics } from "./types"
import { Arc } from './Arc'
import { Card } from './Card'
import { getIndicatorCoordinates } from './utils'


type Props = {
    isLoading: boolean;
    data: EnergyMetrics;
    isDemand?: boolean
}

export const MetricsSection = ({isLoading, data, isDemand }: Props) => {
    const [coordinates, setCoordinates] = useState<Coordinates>()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (data?.current) {
          setCoordinates(getIndicatorCoordinates(data.current))
        }
      }, [data])

    useEffect(() => {
        if (ref.current && !isLoading && !!coordinates) {
          const arc = Arc({
            coordinates, 
            reverseColors: isDemand ? true : false
          })
    
          if (arc) {
            ref.current.appendChild(arc)
            return () => {
              ref.current?.removeChild(arc)
            }
          }
        }
      }, [coordinates, isLoading])
    return isLoading ? 
        <Box mt={10}>
          <Spinner />
        </Box> : (
        <HStack justifyContent="center">
          <Box p={5} ref={ref} />
          <Card data={data} isDemand={isDemand} />
        </HStack>
      )
}