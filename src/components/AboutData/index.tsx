import { Text, useColorModeValue, Grid, GridItem, Box } from '@chakra-ui/react';

export function AboutData() {
    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("gray.800", "gray.200")
    const border = useColorModeValue("gray.200", "gray.300")

    return (
        <Box bg={border} maxWidth={540}>
            <Grid
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={3}
            >
                <GridItem colSpan={1} bg="red">
                    <Text as="span" size="sm" fontWeight="bold">Fulltime Job:<Text as="p" fontSize={22} fontWeight="normal">React Developer</Text></Text>
                </GridItem>
                <GridItem colSpan={2} bg="blue">
                    <Text as="span">Company:<Text as="p">Smart Marketing Digital</Text></Text>
                </GridItem>
                <GridItem colSpan={3}>
                    <Text as="span">Period:<Text as="p">03/2021 / Present</Text></Text>
                </GridItem>
                <GridItem colSpan={4}>
                    <Text as="span">Role:<Text as="p">Web Developer</Text></Text>
                </GridItem>
            </Grid>
        </Box>
    )
}