import { Text, useColorModeValue, Grid, GridItem, Box } from '@chakra-ui/react';
import { AboutJobProps } from '../../Interface/interface';

export function AboutJob({ job, company, period, role }: AboutJobProps) {
    const bg = useColorModeValue("gray.800", "gray.50")
    const text = useColorModeValue("gray.200", "gray.800")

    return (
        <Box bg={bg} maxWidth={540} borderRadius={12} p="4">
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={3}
            >
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={text}>
                        Job:
                        <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="normal">
                            {job}
                        </Text>
                    </Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={text}>
                        Company:
                        <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="normal">
                            {company}
                        </Text>
                    </Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={text}>
                        Period:
                        <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="normal">
                            {period}
                        </Text>
                    </Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={text}>
                        Role:
                        <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="normal">
                            {role}
                        </Text>
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}