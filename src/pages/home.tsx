import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export default function Home() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
                    <Box p="8" bg="gray.800" borderRadius={8}>
                    </Box>
                    <Box p="8" bg="gray.800" borderRadius={8}>
                    </Box>
                    <Box p="8" bg="gray.800" borderRadius={8}>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>

    )
}