import { Text, useColorModeValue, Grid, GridItem, Box, Divider } from '@chakra-ui/react';
import { AboutJobProps } from '../../interface/interface';

export function AboutJob({ job, company, period, role }: AboutJobProps) {
    const bg = useColorModeValue("gray.800", "red.900")
    const title = useColorModeValue("gray.200", "black")
    const text = useColorModeValue("gray.200", "gray.400")

    return (
        <Box bg={bg} maxWidth={540} borderRadius={6} p="3" border="1px solid #111">
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={3}
            >
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title}>
                        Job:
                    </Text>
                    <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="medium" color={text}>
                        {job}
                    </Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title}>
                        Company:
                    </Text>
                    <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="medium" color={text}>
                        {company}
                    </Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title}>
                        Period:
                    </Text>
                    <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="medium" color={text}>
                        {period}
                    </Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span" fontSize={["10px", "12px", "16px", "18px"]} fontWeight="bold" color={title}>
                        Role:
                    </Text>
                    <Text as="p" fontSize={["10px", "14px", "18px", "22px"]} fontWeight="medium" color={text}>
                        {role}
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}