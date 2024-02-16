import { Box, Stack, Text } from '@chakra-ui/react'
import { EnergyMetrics } from './types'
import { toPercent } from './utils'

export const Card = ({ data, isDemand = false }: { data: EnergyMetrics, isDemand?: boolean }) => {
    const { current, thresholdHigh, thresholdLow, average } = data
    return (
        <Box 
            borderRadius="10px"
            border="1px solid"
            borderColor="lightgrey" 
            boxShadow="sm"
            height="225px"
            width="225px"
            p={5}
        >
            <Text textAlign="center" fontSize="5xl">{toPercent(current)}</Text>
            {
                isDemand ?
                <>
                    <Text textAlign="center" fontSize="xl">Demand</Text>
                    <Stack mt={5}>
                        <Text textAlign="center" fontSize="sm" lineHeight="10px">{`Low Demand: < ${toPercent(thresholdLow)}`}</Text>
                        <Text textAlign="center" fontSize="sm" lineHeight="10px">{`High Demand > ${toPercent(thresholdHigh)}`}</Text>
                        <Text textAlign="center" fontSize="sm" lineHeight="10px">{`Avg Demand: ${toPercent(average)}`} </Text>
                    </Stack>
                </> :
                <>
                    <Text textAlign="center" fontSize="xl">Green Generation</Text>
                    <Stack mt={5}>
                        <Text textAlign="center" fontSize="sm" lineHeight="10px">{`Low Green Energy: < ${toPercent(thresholdLow)}`}</Text>
                        <Text textAlign="center" fontSize="sm" lineHeight="10px">{`High Green Energy > ${toPercent(thresholdHigh)}`}</Text>
                        <Text textAlign="center" fontSize="sm" lineHeight="10px">{`Avg Green Energy: ${toPercent(average)}`} </Text>
                    </Stack>
                </>
            }
            
        </Box>
    )
}