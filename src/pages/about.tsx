import { Flex, useColorModeValue, Stack, Text } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { AboutJobTwo } from '../components/AboutJobTwo';
import { AboutJob } from '../components/AboutJob';
import { TechData } from '../components/TechData';
import { Header } from '../components/Header';

export default function About() {
    const color = useColorModeValue("gray.200", "gray.800")
    const text = useColorModeValue("gray.800", "gray.200")
    const bg = useColorModeValue("gray.200", "gray.800")

    return (
        <Flex direction="column" h="100vh" align="center">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Flex direction="column">
                    <Text as="span" fontSize={22} fontWeight="bold" color={text} mb="5">ABOUT ME</Text>
                    <Stack spacing="4">
                        <Text
                            fontSize={["8px", "10px", "12px", "14px"]}
                            as="span"
                            fontWeight="bold"
                            fontStyle="italic"
                            color="red.700"
                        >last jobs</Text>
                        <Flex direction="row">
                            <AboutJobTwo
                                job="Fulltime Job"
                                company="Smart Marketing Digital"
                                period="03/2021 - 11/2021"
                                role="Web Developer"
                            />

                        </Flex>
                        <Flex direction="row">
                            <AboutJobTwo
                                job="Pertime Job"
                                company="Edubrahub"
                                period="09/2021 - 12/2021"
                                role="Web Developer"
                            />

                        </Flex>
                        <Text
                            fontSize={["8px", "10px", "12px", "14px"]}
                            as="span"
                            fontWeight="bold"
                            fontStyle="italic"
                            color="red.700"
                        >actual job</Text>
                        <Flex direction="row">
                            <AboutJobTwo
                                job="Fulltime Job"
                                company="Simbiose Ventures"
                                period="11/2021 - present"
                                role="FullStack Developer"
                            />

                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}