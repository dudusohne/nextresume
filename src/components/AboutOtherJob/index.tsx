import { Text, useColorModeValue, Grid, GridItem, Box } from '@chakra-ui/react';

export function AboutOtherJob() {

    const bg = useColorModeValue("gray.200", "gray.800")
    const text = useColorModeValue("gray.800", "gray.200")

    return (
        
        <Box bg={bg} maxWidth={540} borderRadius={12} p="4">
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={3}
            >
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span" fontSize={16} fontWeight="bold" color={text}>
                        Pertime Job:    
                        <Text as="p" fontSize={22} fontWeight="normal">
                            Front-end Developer
                        </Text>
                    </Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Text as="span" fontSize={16} fontWeight="bold" color={text}>
                        Company:
                        <Text as="p" fontSize={22} fontWeight="normal">
                            EdubraHub
                        </Text>
                    </Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span" fontSize={16} fontWeight="bold" color={text}>
                        Period:
                        <Text as="p" fontSize={22} fontWeight="normal">
                            09/2021 - Present
                        </Text>
                    </Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Text as="span" fontSize={16} fontWeight="bold" color={text}>
                        Role:
                        <Text as="p" fontSize={22} fontWeight="normal">
                            React Developer
                        </Text>
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}