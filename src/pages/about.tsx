import { Box, Flex, Heading, Avatar, Icon, Table, Thead, Tr, Th, Stack, Tbody, Td, Text } from '@chakra-ui/react';
import { HeaderAbout } from '../components/HeaderAbout';
import { Sidebar } from '../components/Sidebar';
import { SiJavascript } from 'react-icons/si';
import { Pagination } from '../components/Pagination';
import { AboutData } from '../components/AboutData';

export default function About() {

    return (
        <Box>
            <HeaderAbout />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.100" p="8" borderWidth={1} borderColor="gray.400">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" color="black">About Me</Heading>
                        <Avatar size="lg" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" />
                    </Flex>
                    <AboutData />
                </Box>
            </Flex>
        </Box>
    )
}