import { Flex, SimpleGrid, Text, IconButton, useColorModeValue, Link } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { ProjectBox } from '../components/ProjectBox';
import { MiniCard } from '../MiniCard/MiniCard';

import { RiGithubFill } from 'react-icons/ri'
import { FaPython, FaVuejs } from "react-icons/fa";

import { GrMysql } from 'react-icons/gr'
import { SiJavascript, SiTypescript } from 'react-icons/si';

export default function Home() {
    const color = useColorModeValue("gray.800", "gray.200")

    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Flex flexDirection="column">
                    <Flex flexDirection="column">
                        <Text as="span" fontSize={22} fontWeight="bold" color={color} mb="5">PROJECTS</Text>
                        <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start" columns={3}>
                            <ProjectBox
                                title="BAR TABS"
                                subtitle="this project has a purpose of managing stock, tabs and sales for a pub."
                                tools="react, typescript, firebase and sass."
                                description="access only by auth with firebase,
                            realtime tabs-viewer with react hooks and realtime database,
                            product inventory, daily and monthly cash-closer dashboard."
                            >
                                <Link href="https://github.com/dudusohne/casalibre" target="_blank">
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
                            <ProjectBox
                                title="THIS RESUME"
                                subtitle="this project has a purpose of show my personal portfolio."
                                tools="next, typescript and chakra.ui"
                                description="shared the code of this project with other devs that are looking for a portfolio"
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
                            <ProjectBox
                                title="POKEMON DESK"
                                subtitle="make your own pokemon team."
                                tools="vue 3, composition api, typescript and quasar"
                                description="its a simple vue project that calls an pokemon api"
                            >
                                <Link href="https://github.com/dudusohne/pokemon-desk-team" target="_blank">
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
                    <Flex flexDirection="column">
                        <Text as="span" fontSize={22} fontWeight="bold" color={color} mb="5">WORK STACK</Text>
                        <Flex flexDirection="row" justify="flex-start">
                            <MiniCard
                                title="VUE"
                                badge="green"
                                description="description of where I use it and when"
                                icon={FaVuejs}
                                iconColor="green.400"
                            />
                            <MiniCard
                                title="Javascript"
                                badge="yellow"
                                description="description of where I use it and when"
                                icon={SiJavascript}
                                iconColor="yellow.400"
                            />
                            <MiniCard
                                title="Typescript"
                                badge="blue"
                                description="description of where I use it and when"
                                icon={SiTypescript}
                                iconColor="blue.400"
                            />
                        </Flex>
                        <Flex flexDirection="row" justify="flex-start" mt="2">
                            <MiniCard
                                title="PYTHON"
                                badge="yellow"
                                description="description of where I use it and when"
                                icon={FaPython}
                                iconColor="yellow.400"
                            />
                            <MiniCard
                                title="SQL"
                                badge="cyan"
                                description="description of where I use it and when"
                                icon={GrMysql}
                                iconColor="cyan.400"
                            />
                        </Flex>

                    </Flex>
                    <Flex flexDirection="column">
                        <Text as="span" fontSize={22} fontWeight="bold" color={color} mb="5">WORK STACK</Text>
                        <Flex flexDirection="row" justify="flex-start">
                            <MiniCard
                                title="VUE"
                                badge="green"
                                description="description of where I use it and when"
                                icon={FaVuejs}
                                iconColor="green.400"
                            />
                            <MiniCard
                                title="Javascript"
                                badge="yellow"
                                description="description of where I use it and when"
                                icon={SiJavascript}
                                iconColor="yellow.400"
                            />
                            <MiniCard
                                title="Typescript"
                                badge="blue"
                                description="description of where I use it and when"
                                icon={SiTypescript}
                                iconColor="blue.400"
                            />
                        </Flex>
                        <Flex flexDirection="row" justify="flex-start" mt="2">
                            <MiniCard
                                title="PYTHON"
                                badge="yellow"
                                description="description of where I use it and when"
                                icon={FaPython}
                                iconColor="yellow.400"
                            />
                            <MiniCard
                                title="SQL"
                                badge="cyan"
                                description="description of where I use it and when"
                                icon={GrMysql}
                                iconColor="cyan.400"
                            />
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}