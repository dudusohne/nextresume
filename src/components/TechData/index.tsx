import { Box, Text, Stack, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaReact, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiNextDotJs, SiJavascript, SiTypescript, SiStyledComponents, SiCss3, SiHtml5, SiStripe, SiPrismic } from 'react-icons/si';


export function TechData() {
    const bg = useColorModeValue("gray.200", "gray.800")

    return (
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
    )
}