import { Box, Flex, Heading, Avatar, useColorModeValue } from '@chakra-ui/react';
import { HeaderAbout } from '../components/HeaderAbout';
import { Sidebar } from '../components/Sidebar';
import { AboutData } from '../components/AboutData';
import { FaReact, FaSass } from 'react-icons/fa';
import { SiNextDotJs, SiJavascript, SiTypescript, SiStyledComponents, SiCss3, SiHtml5 } from 'react-icons/si';

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
                        <Box bg={bg} maxWidth={540} borderRadius={12} p="4">
                            <FaReact />
                            <SiNextDotJs />
                            <SiJavascript />
                            <SiTypescript />
                            <SiStyledComponents />
                            <FaSass />
                            <SiCss3 />
                            <SiHtml5 />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}