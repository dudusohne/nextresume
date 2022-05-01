import { Text, useColorModeValue, Grid, GridItem, Box, Divider, Flex } from '@chakra-ui/react';
import { AboutJobProps } from '../../interface/interface';

export function AboutJobTwo({ job, company, period, role }: AboutJobProps) {
    const bg = useColorModeValue("gray.800", "gray.700")
    const title = useColorModeValue("gray.200", "black")
    const text = useColorModeValue("gray.200", "gray.400")

    const bg2 = useColorModeValue("black", "gray.900")
    const title2 = useColorModeValue("gray.300", "gray.600")
    const text2 = useColorModeValue("gray.200", "gray.400")

    return (
        <Box bg={bg} borderRadius={6} p="3" border="1px solid #2e0000" style={{ boxShadow: '0px 12px 28px -9px rgba(0, 0, 0, 0.72);' }}>

            <Flex flexDirection="row">
                <Flex flexDirection="row" align="center">
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title}>
                        Job:
                    </Text>
                    <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="medium" color={text} ml="2">
                        {job}
                    </Text>
                </Flex>


                <Flex flexDirection="row" align="center" ml="2" borderLeft="1px solid #161616" pl="2">
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title}>
                        Company:
                    </Text>
                    <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="medium" color={text} ml="2">
                        {company}
                    </Text>
                </Flex>
            </Flex>

            <Divider />

            <Flex flexDirection="row">
                <Box bg={bg2} width="100%" borderRadius="6px" p="2" border="1px solid #000000" mt="2">
                    <Flex flexDirection="column" align="flex-start">
                        <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title2}>
                            Period:
                        </Text>
                        <Text as="p" fontSize={["10px", "14px", "18px", "20px"]} fontWeight="medium" color={text2} ml="2">
                            {period}
                        </Text>
                    </Flex>
                </Box>


                <Box bg={bg2} width="100%" borderRadius="6px" p="2" border="1px solid #000000" mt="2" ml="2">
                    <Flex flexDirection="column" align="flex-start">
                        <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title2}>
                           Role:
                        </Text>
                        <Text as="p" fontSize={["10px", "14px", "18px", "20px"]} fontWeight="medium" color={text2} ml="2">
                            {role}
                        </Text>
                    </Flex>
                </Box>

            </Flex>
        </Box>
    )
}