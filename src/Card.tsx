import { Box, Stack, Text } from '@chakra-ui/react'
import { DemandData } from './types'
import { toPercent } from './utils'

export const Card = ({ data }: { data: DemandData }) => {
    const { current, thresholdHigh, thresholdLow, average } = data
    return (
        <Box 
            borderRadius="10px"
            border="1px solid"
            borderColor="lightgrey" 
            boxShadow="sm"
            height="200px"
            width="200px"
            p={5}
        >
            <Text textAlign="center" fontSize="5xl">{toPercent(current)}</Text>
            <Text textAlign="center" fontSize="xl">Demand</Text>
            <Stack mt={5}>
                <Text textAlign="center" fontSize="sm" lineHeight="10px">{`Low Demand: < ${toPercent(thresholdLow)}`}</Text>
                <Text textAlign="center" fontSize="sm" lineHeight="10px">{`High Demand > ${toPercent(thresholdHigh)}`}</Text>
                <Text textAlign="center" fontSize="sm" lineHeight="10px">{`Average Demand: ${toPercent(average)}`} </Text>
            </Stack>
        </Box>
    )
}