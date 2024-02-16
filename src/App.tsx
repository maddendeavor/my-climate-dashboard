
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Box, Text, VStack } from '@chakra-ui/react'

import { Arc } from './Arc'
import { BalancingAuthorityDropdown } from './Dropdown'
import { getIndicatorCoordinates } from './utils'
import { Coordinates } from './types'

type DemandData = {
  current: number;
  thresholdLow: number;
  thresholdHigh: number;
  average: number
}

function App() {
  const [balancingAuthority, setBalancingAuthority] = useState('AECI')
  const [demandData, setDemandData] = useState<DemandData>()
  const [coordinates, setCoordinates] = useState<Coordinates>()
  const ref = useRef<HTMLDivElement>(null)

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setBalancingAuthority(e.target.value)
 }, [])

  const fetchBAStatus = useCallback(async (ba: string) => {
   if (ba !== '') {
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
    if (ref.current && !!coordinates) {
      const arc = Arc(coordinates)

      if (arc) {
        ref.current.appendChild(arc)
        return () => {
          ref.current?.removeChild(arc)
        }
      }
    }
  }, [coordinates])

  return (
    <VStack p={10}>
      <Text fontSize="4xl">My Climate Dashboard</Text>
      <Box>
        <BalancingAuthorityDropdown onChange={onChange} />
      </Box>
      <Box p={5} ref={ref} />
    </VStack>
  )
}

export default App
