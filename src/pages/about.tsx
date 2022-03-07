import { Flex, useColorModeValue, Stack, Text } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { AboutJob } from '../components/AboutJob';
import { TechData } from '../components/TechData';
import { Header } from '../components/Header';

export default function About() {
    const color = useColorModeValue("gray.200", "gray.800")
    const text = useColorModeValue("gray.800", "gray.200")
    const bg = useColorModeValue("gray.200", "gray.800")

    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Flex direction="column">
                    <Text as="span" fontSize={22} fontWeight="bold" color={text} mb="5">ABOUT ME</Text>
                    <Stack spacing="4">
                        <Flex direction="row">
                            <AboutJob
                                job="Fulltime Job"
                                company="Smart Marketing Digital"
                                period="03/2021 - 11/2021"
                                role="Web Developer"
                            />
                            <TechData />
                        </Flex>
                        <Flex direction="row">
                            <AboutJob
                                job="Pertime Job"
                                company="Edubrahub"
                                period="09/2021 - 11/2021"
                                role="Web Developer"
                            />
                            <TechData />
                        </Flex>
                        <Flex direction="row">
                            <AboutJob
                                job="Fulltime Job"
                                company="Simbiose Ventures"
                                period="11/2021 - present"
                                role="FullStack Developer"
                            />
                            <TechData />
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}