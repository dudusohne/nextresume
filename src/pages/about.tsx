import { Box, Flex, Heading, Avatar, useColorModeValue, Stack, Text } from '@chakra-ui/react';
import { HeaderAbout } from '../components/HeaderAbout';
import { Sidebar } from '../components/Sidebar';
import { AboutData } from '../components/AboutData';
import { FaReact, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiNextDotJs, SiJavascript, SiTypescript, SiStyledComponents, SiCss3, SiHtml5, SiStripe, SiPrismic } from 'react-icons/si';

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
                    <Flex direction="row">
                        <AboutData />
                        <Box bg={bg} maxWidth={540} borderRadius={12} p="4" ml="4">
                            <Text fontSize={12} mb="5">TECNOLOGIES</Text>
                            <Stack spacing="3">
                                <Flex direction="row">
                                    <Stack spacing="2" direction="row">
                                        <FaReact size={30} />
                                        <SiNextDotJs size={30} />
                                        <SiJavascript size={30} />
                                        <SiTypescript size={30} />
                                    </Stack>
                                </Flex>
                                <Flex direction="row">
                                    <Stack spacing="2" direction="row">
                                        <SiStyledComponents size={30} />
                                        <FaSass size={30} />
                                        <SiCss3 size={30} />
                                        <SiHtml5 size={30} />
                                    </Stack>
                                </Flex>
                                <Flex direction="row">
                                    <Stack spacing="2" direction="row">
                                        <SiStripe size={30} />
                                        <SiPrismic size={30} />
                                        <FaGitAlt size={30} />
                                    </Stack>
                                </Flex>
                            </Stack>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}