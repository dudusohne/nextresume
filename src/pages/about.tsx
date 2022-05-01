import { Flex, useColorModeValue, Stack, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from '@chakra-ui/react';
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
                <Flex direction="column" width="100%">
                    <Text as="span" fontSize={22} fontWeight="bold" color={text} mb="5">ABOUT ME</Text>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'orange.500', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                        Click me to see a different style
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'orange.500', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                        Click me to see a different style
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    
                </Flex>
            </Flex>
        </Flex>
    )
}