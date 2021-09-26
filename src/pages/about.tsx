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
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">About</Heading>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px="6" color="gray.300" w="8">
                                    </Th>
                                    <Th>NAME / EMAIL</Th>
                                    <Th>BIRTHDATE</Th>
                                    <Th>CITY/STATE</Th>
                                    <Th>PRO EXP TIME</Th>
                                    <Th>CONDING IN REACT</Th>
                                    <Th w="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px="6">
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">
                                                Eduardo Sohne
                                            </Text>
                                            <Text fontSize="small" color="gray.300">
                                                dudu.hit@gmail.com
                                            </Text>
                                        </Box>
                                    </Td>
                                    <Td>
                                        19 de Junho, 1991
                                    </Td>
                                    <Td>
                                        GRAMADO/RS
                                    </Td>
                                </Tr>
                            </Tbody>
                            <Thead>
                                <Tr>
                                    <Th px="6" color="gray.300" w="8">
                                    </Th>
                                    <Th>TECNOLOGIES THAT I WORK WITH</Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th w="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                    </Td>
                                    <Td>
                                        <Box align="center">
                                            <Icon as={SiJavascript} size="lg" />
                                            <Text fontSize="small" color="gray.300">
                                                JAVASCRIPT
                                            </Text>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box align="center">
                                            <Icon as={SiJavascript} size="lg" />
                                            <Text fontSize="small" color="gray.300">
                                                REACT
                                            </Text>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box align="center">
                                            <Icon as={SiJavascript} size="lg" />
                                            <Text fontSize="small" color="gray.300">
                                                TYPESCRIPT
                                            </Text>
                                        </Box>
                                    </Td>
                                    
                                </Tr>
                            </Tbody>

                    </Table>

                </Box>
            </Flex>
        </Box>
    )
}