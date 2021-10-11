import { Flex, SimpleGrid, Box, Text, Divider, Stack, Button, IconButton, useColorMode, useColorModeValue, useDisclosure, Slide, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody } from '@chakra-ui/react'
import { RiGithubFill } from 'react-icons/ri'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { BottomSlideContent } from '../components/BottomSlideContent';

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("gray.800", "gray.200")
    const border = useColorModeValue("gray.200", "gray.300")

    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Flex direction="column">
                    <Text as="span" fontSize={22} fontWeight="bold" color={color} mb="5">PROJECTS</Text>
                    <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
                        <Box p="8" borderRadius={8} borderWidth={1} borderColor={border} transition="0.4s ease" _hover={{ borderColor: 'red.300' }}>
                            <Stack spacing="4">
                                <Box>
                                    <Text as="span" color={color} fontWeight="bold" fontSize={30}>CASA LIBRE</Text>
                                    <Divider opacity="0.1" />
                                    <Text color="red.600" fontWeight="600">this project has a purpose of managing stock, tabs and sales for a pub.</Text>
                                </Box>
                                <Box>
                                    <Text as="span" color={color} fontWeight="600" fontSize={22}>tools and techs:</Text>
                                    <Text color={color}>react, typescript, firebase and sass</Text>
                                </Box>
                                <Box>
                                    <Text as="span" color={color} fontWeight="600" fontSize={22}>core functions:</Text>
                                    <Text color={color}>
                                        access only by auth with firebase,
                                        realtime tabs-viewer with react hooks and realtime database,
                                        product inventory, daily and monthly cash-closer dashboard.
                                    </Text>
                                </Box>
                                <Button onClick={onToggle}>{isOpen ? 'CLOSE' : 'SEE MORE'}</Button>
                                <Slide in={isOpen} direction="bottom" style={{ zIndex: 10 }}>
                                    <Box p="40px" color="white" h="450px" mt="4" bg="teal.500" rounded="md" shadow="md">
                                        <Button onClick={onToggle} mt={-10} bg="red" _hover={{ bgColor: 'black', color: 'white' }}>CLOSE</Button>
                                        <BottomSlideContent />
                                    </Box>
                                </Slide>
                            </Stack>
                        </Box>
                        <Box p="8" borderRadius={8} borderWidth={1} borderColor={border} transition="0.4s ease" _hover={{ borderColor: 'red.300' }}>
                            <Stack spacing="4">
                                <Box>
                                    <Text as="span" color={color} fontWeight="bold" fontSize={30}>ACTIVE SALES</Text>
                                    <Divider opacity="0.1" />
                                    <Text color="red.600" fontWeight="600">this project has a purpose of managing sales for a company, stores and salesforce.</Text>
                                </Box>
                                <Box>
                                    <Text as="span" color={color} fontWeight="500" fontSize={22}>tools and techs:</Text>
                                    <Text color={color} fontWeight="400">react, typescript, firebase and sass</Text>
                                </Box>
                                <Box>
                                    <Text as="span" color={color} fontWeight="500" fontSize={22}>core functions:</Text>
                                    <Text color={color} fontWeight="400">
                                        access only by auth with firebase(google and email/password),
                                        realtime data with react hooks and realtime database,
                                        sku ranking, saler ranking and more data measures.
                                    </Text>
                                </Box>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button>SEE MORE</Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Atention!</PopoverHeader>
                                        <PopoverBody>Project content is unvaliable at the moment!</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Stack>
                        </Box>
                        <Box p="8" borderRadius={8} borderWidth={1} borderColor={border} transition="0.4s ease" _hover={{ borderColor: 'red.300' }}>
                            <Stack spacing="4">
                                <Box>
                                    <Text as="span" color={color} fontWeight="bold" fontSize={30}>NEXTRESUME</Text>
                                    <Divider opacity="0.1" />
                                    <Text color="red.600" fontWeight="600">this project has a purpose of show my personal portfolio.</Text>
                                </Box>
                                <Box>
                                    <Text as="span" color={color} fontWeight="500" fontSize={22}>tools and techs:</Text>
                                    <Text color={color}>next, typescript and chakra.ui</Text>
                                </Box>
                                <Box>
                                    <Text as="span" color={color} fontWeight="500" fontSize={22}>core functions:</Text>
                                    <Text color={color}>
                                        shared the code of this project with other devs that are looking for a portfolio
                                    </Text>
                                </Box>
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
                            </Stack>
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </Flex>

    )
}