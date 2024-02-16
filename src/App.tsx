
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { VStack } from '@chakra-ui/react'

import { Arc } from './Arc'
import { BalancingAuthorityDropdown } from './Dropdown'

function App() {
  const [balancingAuthority, setBalancingAuthority] = useState('AECI')
  const ref = useRef<HTMLDivElement>(null)

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setBalancingAuthority(e.target.value)
 }, [])

  const fetchBAStatus = useCallback(async (ba: string) => {
   if (ba !== '') {
     const resp = await axios.post('/api/my-climate-dashboard/green-energy-stats', {
       ba_name: ba
     })
     console.log('resp: ', resp)
   }
  }, [])
  
  
  useEffect(()=> {
   fetchBAStatus(balancingAuthority)
  }, [balancingAuthority])

  
  useEffect(() => {
    if (ref.current) {
      const arc = Arc()

      if (arc) {
        ref.current.appendChild(arc)
        return () => {
          ref.current?.removeChild(arc)
        }
      }
    }
  }, [])

  return (
    <VStack>
      <BalancingAuthorityDropdown onChange={onChange} />
      <p>Meter</p>
      <div ref={ref} />
    </VStack>
  )
}

export default App
