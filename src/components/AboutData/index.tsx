import { Text, useColorModeValue, Grid, GridItem, Box } from '@chakra-ui/react';

export function AboutData() {
    const color = useColorModeValue("gray.200", "gray.800")
    const color2 = useColorModeValue("gray.800", "gray.200")
    return (
        <Box bg={color} maxWidth={540} borderRadius={12} p="4">
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={3}
            >
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span" size="sm" fontWeight="bold" color={color2}>Fulltime Job:<Text as="p" fontSize={22} fontWeight="normal">React Developer</Text></Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span">Company:<Text as="p" fontSize={22} color={color2}>Smart Marketing Digital</Text></Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span">Period:<Text as="p" color={color2}>03/2021 / Present</Text></Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span">Role:<Text as="p" color={color2}>Web Developer</Text></Text>
                </GridItem>
            </Grid>
        </Box>
    )
}