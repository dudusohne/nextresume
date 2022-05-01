import { Flex, useColorModeValue, Stack, Text, Input, Button } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { AboutJob } from '../components/AboutJob';
import { TechData } from '../components/TechData';
import { Header } from '../components/Header';

export default function Contact() {
    const color = useColorModeValue("gray.200", "gray.800")
    const text = useColorModeValue("gray.800", "gray.200")
    const bg = useColorModeValue("gray.200", "gray.800")

    return (
        <Flex direction="column" h="100vh" align="center">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Flex direction="column" w="100%" align="center" mt="2">
                    <Text as="span" fontSize={22} fontWeight="bold" color={text} mb="5">Send me a message</Text>
                    <Input as="textarea" w="60%" minHeight="200" bg={bg} disabled/>
                    <Button w="60%" mt="4" disabled>SEND</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}