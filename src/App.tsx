
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Spinner, Text, VStack } from '@chakra-ui/react'

import { BalancingAuthorityDropdown } from './Dropdown'
import {  EnergyMetrics } from './types'
import { MetricsSection } from './MetricsSection'



function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [balancingAuthority, setBalancingAuthority] = useState('AECI')
  const [demandData, setDemandData] = useState<EnergyMetrics>()
  const [greenEnergyData, setGreenEnergyData] = useState<EnergyMetrics>()

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
     setGreenEnergyData({
      current: data.green_ratio_current,
      thresholdLow: data.green_threshold_low,
      thresholdHigh: data.green_threshold_high,
      average: data.green_ratio_mean
     })
     setIsLoading(false)
   }
  }, [])
  
  
  useEffect(()=> {
   fetchBAStatus(balancingAuthority)
  }, [balancingAuthority])


  return (
    <VStack p={10}>
      <Text fontSize="4xl">My Climate Dashboard</Text>
      <Box>
        <BalancingAuthorityDropdown onChange={onChange} />
      </Box>
      {isLoading ? 
        <Box mt={10}>
          <Spinner />
        </Box> : 
        <>
          <MetricsSection 
            isLoading={isLoading} 
            data={demandData as EnergyMetrics} 
            isDemand />
          <MetricsSection 
            isLoading={isLoading}
            data={greenEnergyData as EnergyMetrics}
          />
        </>
      }
    </VStack>
  )
}

export default App
