import { Box, Flex, Heading, Avatar, useColorModeValue, Stack, Text } from '@chakra-ui/react';
import { HeaderAbout } from '../components/HeaderAbout';
import { Sidebar } from '../components/Sidebar';
import { AboutJob } from '../components/AboutJob';
import { TechData } from '../components/TechData';


export default function About() {
    const color = useColorModeValue("gray.200", "gray.800")
    const color2 = useColorModeValue("gray.800", "gray.200")
    const bg = useColorModeValue("gray.200", "gray.800")


    return (
        <Box>
            <HeaderAbout />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} p="8" borderWidth={1} borderColor="gray.400" bg={color2}>
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading fontSize={28} fontWeight="400" color={color} fontStyle="italic">About Me</Heading>
                        <Avatar size="lg" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" />
                    </Flex>
                    <Stack spacing="4">
                        <Flex direction="row">
                            <AboutJob />
                            <TechData />
                        </Flex>
                        <Flex direction="row">
                            <Box bg={bg} maxWidth={540} borderRadius={12} p="4">
                                <Text>Carrer Goals</Text>
                            </Box>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}