import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Stack, Tbody, Td, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SiJavascript } from 'react-icons/si';
import { Pagination } from '../components/Pagination';

export default function About() {

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.200" p="8" borderWidth={1} borderColor="gray.400">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" color="black">About</Heading>
                    </Flex>


                </Box>
            </Flex>
        </Box>
    )
}