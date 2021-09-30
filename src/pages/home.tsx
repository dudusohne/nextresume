import { Flex, SimpleGrid, Box, Text, Divider, Stack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export default function Home() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
                    <Box p="8" bg="gray.200" borderRadius={8} borderWidth={1} borderColor="gray.300">
                        <Stack spacing="4">
                            <Box>
                                <Text as="span" color="black" fontWeight="bold" fontSize={30}>CASA LIBRE</Text>
                                <Divider opacity="0.1" />
                                <Text color="red.600" fontWeight="600">this project has a purpose of managing stock, tabs and sales for a pub.</Text>
                            </Box>
                            <Box>
                                <Text as="span" color="gray.800" fontWeight="600" fontSize={22}>tools and techs:</Text>
                                <Text  color="black">react, typescript, firebase and sass</Text>
                            </Box>
                            <Box>
                                <Text as="span" color="gray.800" fontWeight="600" fontSize={22}>core functions:</Text>
                                <Text  color="black">
                                    access only by auth with firebase,
                                    realtime tabs-viewer with react hooks and realtime database,
                                    product inventory, daily and monthly cash-closer dashboard.
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box p="8" bg="gray.200" borderRadius={8} borderWidth={1} borderColor="gray.300">
                        <Stack spacing="4">
                            <Box>
                                <Text as="span" color="black" fontWeight="bold" fontSize={30}>ACTIVE SALES</Text>
                                <Divider opacity="0.1" />
                                <Text color="red.600" fontWeight="600">this project has a purpose of managing sales for a company, stores and salesforce.</Text>
                            </Box>
                            <Box>
                                <Text as="span" color="gray.800" fontWeight="500" fontSize={22}>tools and techs:</Text>
                                <Text color="black" fontWeight="400">react, typescript, firebase and sass</Text>
                            </Box>
                            <Box>
                                <Text as="span" color="gray.800" fontWeight="500" fontSize={22}>core functions:</Text>
                                <Text color="black" fontWeight="400">
                                    access only by auth with firebase(google and email/password),
                                    realtime data with react hooks and realtime database,
                                    sku ranking, saler ranking and more data measures.
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box p="8" bg="gray.200" borderRadius={8} borderWidth={1} borderColor="gray.300">
                        <Stack spacing="4">
                            <Box>
                                <Text as="span" color="black" fontWeight="bold" fontSize={30}>NEXTRESUME</Text>
                                <Divider opacity="0.1" />
                                <Text color="red.600" fontWeight="600">this project has a purpose of show my personal portfolio.</Text>
                            </Box>
                            <Box>
                                <Text as="span" color="gray.800" fontWeight="500" fontSize={22}>tools and techs:</Text>
                                <Text color="black">next, typescript and chakra.ui</Text>
                            </Box>
                            <Box>
                                <Text as="span" color="gray.800" fontWeight="500" fontSize={22}>core functions:</Text>
                                <Text color="black">
                                    still deciding
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>

    )
}