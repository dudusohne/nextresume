import { Flex, SimpleGrid, Box, Text, Divider, Stack, Button, IconButton, useColorMode, useColorModeValue, useDisclosure, Slide, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody } from '@chakra-ui/react'
import { RiGithubFill } from 'react-icons/ri'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { BottomSlideContent } from '../components/BottomSlideContent';
import { ProjectBox } from '../components/ProjectBox';

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("gray.800", "gray.200")
    const border = useColorModeValue("gray.200", "gray.300")

    return (
        <Flex direction="column" h="100vh">
            <Header withProfile />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Flex direction="column">
                    <Text as="span" fontSize={22} fontWeight="bold" color={color} mb="5">PROJECTS</Text>
                    <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
                        <ProjectBox
                            title="BAR TABS"
                            subtitle="this project has a purpose of managing stock, tabs and sales for a pub."
                            tools="react, typescript, firebase and sass."
                            description="access only by auth with firebase,
                            realtime tabs-viewer with react hooks and realtime database,
                            product inventory, daily and monthly cash-closer dashboard."
                            buttonText="CLICK TO SEE MORE"
                            onClick={() => { }}
                        />
                        <ProjectBox
                            title="THIS RESUME"
                            subtitle="this project has a purpose of show my personal portfolio."
                            tools="next, typescript and chakra.ui"
                            description="shared the code of this project with other devs that are looking for a portfolio"
                            buttonText="CLICK TO SEE MORE"
                            onClick={() => { }}
                        >
                            <Link href="https://github.com/dudusohne/nextresume" target="_blank">
                                <IconButton
                                    variant="outline"
                                    borderColor="gray.400"
                                    aria-label="Call Sage"
                                    fontSize={30}
                                    icon={<RiGithubFill color={color} />}
                                    _hover={{ background: 'red.500', color: 'black.500', borderColor: 'black', fontColor: 'black' }}
                                />
                            </Link>
                        </ProjectBox>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </Flex>

    )
}