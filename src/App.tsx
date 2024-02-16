
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Box, HStack, Spinner, Text, VStack } from '@chakra-ui/react'

import { Arc } from './Arc'
import { BalancingAuthorityDropdown } from './Dropdown'
import { getIndicatorCoordinates } from './utils'
import { Coordinates, DemandData } from './types'
import { Card } from './Card'



function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [balancingAuthority, setBalancingAuthority] = useState('AECI')
  const [demandData, setDemandData] = useState<DemandData>()
  const [coordinates, setCoordinates] = useState<Coordinates>()
  const ref = useRef<HTMLDivElement>(null)

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setBalancingAuthority(e.target.value)
 }, [])

  const fetchBAStatus = useCallback(async (ba: string) => {
   if (ba !== '') {
    setIsLoading(true)
     const resp = await axios.post('/api/my-climate-dashboard/green-energy-stats', {
       ba_name: ba
     })
     const data = resp.data
     setDemandData({
      current: data.demand_ratio_current,
      thresholdLow: data.demand_threshold_low,
      thresholdHigh: data.demand_threshold_high,
      average: data.demand_ratio_mean
     })
     setIsLoading(false)
   }
  }, [])

  useEffect(() => {
    if (demandData?.current) {
      setCoordinates(getIndicatorCoordinates(demandData.current))
    }
  }, [demandData])
  
  
  useEffect(()=> {
   fetchBAStatus(balancingAuthority)
  }, [balancingAuthority])

  
  useEffect(() => {
    if (ref.current && !isLoading && !!coordinates) {
      const arc = Arc(coordinates)

      if (arc) {
        ref.current.appendChild(arc)
        return () => {
          ref.current?.removeChild(arc)
        }
      }
    }
  }, [coordinates, isLoading])

  return (
    <VStack p={10}>
      <Text fontSize="4xl">My Climate Dashboard</Text>
      <Box>
        <BalancingAuthorityDropdown onChange={onChange} />
      </Box>
      {isLoading ? 
        <Box mt={10}>
          <Spinner />
        </Box> : (
        <HStack justifyContent="center">
          <Box p={5} ref={ref} />
          <Card data={demandData as DemandData} />
        </HStack>
      )}
    </VStack>
  )
}

export default App
