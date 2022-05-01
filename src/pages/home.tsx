import {
  Flex,
  SimpleGrid,
  Text,
  IconButton,
  useColorModeValue,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ProjectBox } from "../components/ProjectBox";
import { MiniCard } from "../components/MiniCard/MiniCard";

import { RiGithubFill } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { FaPython, FaVuejs } from "react-icons/fa";

import { GrMysql } from "react-icons/gr";
import { SiJavascript, SiTypescript } from "react-icons/si";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { DraggableList } from "../components/DraggableList/DraggableList";

export default function Home() {
  const color = useColorModeValue("gray.800", "gray.200");

  const stripe = useColorModeValue("gray.400", "gray.600");

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex direction="column" h="100vh" align="center">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Flex flexDirection="column">


          {/* // <Parallax pages={1.5} style={{ top: '0', left: '0' }}>
            //   <ParallaxLayer
            //     offset={0}
            //     speed={1}
            //     style={{
            //       display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            //     }}>
            //   </ParallaxLayer> */}


          <Flex flexDirection="column">
            <Text
              as="span"
              fontSize={22}
              fontWeight="bold"
              color={color}
              mb="5"
            >
              PROJECTS
            </Text>
            <SimpleGrid
              flex="1"
              gap="4"
              minChildWidth={320}
              align="flex-start"
              columns={3}
            >
              <ProjectBox
                title="BAR TABS"
                subtitle="this project has a purpose of managing stock, tabs and sales for a pub."
                tools="react, typescript, firebase and sass."
                description="access only by auth with firebase,
                                            realtime tabs-viewer with react hooks and realtime database,
                                             product inventory, daily and monthly cash-closer dashboard."
              >
                <Link
                  href="https://github.com/dudusohne/casalibre"
                  target="_blank"
                >
                  <IconButton
                    variant="outline"
                    borderColor="gray.400"
                    aria-label="Call Sage"
                    fontSize={30}
                    icon={<RiGithubFill color={color} />}
                    _hover={{
                      background: "red.500",
                      color: "black.500",
                      borderColor: "black",
                      fontColor: "black",
                    }}
                  />
                </Link>
              </ProjectBox>
              <ProjectBox
                title="THIS RESUME"
                subtitle="this project has a purpose of show my personal portfolio."
                tools="next, typescript and chakra.ui"
                description="shared the code of this project with other devs that are looking for a portfolio"
              >
                <Link
                  href="https://github.com/dudusohne/nextresume"
                  target="_blank"
                >
                  <IconButton
                    variant="outline"
                    borderColor="gray.400"
                    aria-label="Call Sage"
                    fontSize={30}
                    icon={<RiGithubFill color={color} />}
                    _hover={{
                      background: "red.500",
                      color: "black.500",
                      borderColor: "black",
                      fontColor: "black",
                    }}
                  />
                </Link>
              </ProjectBox>
              <ProjectBox
                title="POKEMON DESK"
                subtitle="make your own pokemon team."
                tools="vue 3, composition api, typescript and quasar"
                description="its a simple vue project that calls an pokemon api"
              >
                <Link
                  href="https://github.com/dudusohne/pokemon-desk-team"
                  target="_blank"
                >
                  <IconButton
                    variant="outline"
                    borderColor="gray.400"
                    aria-label="Call Sage"
                    fontSize={30}
                    icon={<RiGithubFill color={color} />}
                    _hover={{
                      background: "red.500",
                      color: "black.500",
                      borderColor: "black",
                      fontColor: "black",
                    }}
                  />
                </Link>
                <Link
                  href="https://pokemon-desk-team.vercel.app/"
                  target="_blank"
                  ml="1"
                >
                  <IconButton
                    variant="outline"
                    borderColor="gray.400"
                    aria-label="Call Sage"
                    fontSize={30}
                    icon={<FiGlobe color={color} />}
                    _hover={{
                      background: "red.500",
                      color: "black.500",
                      borderColor: "black",
                      fontColor: "black",
                    }}
                  />
                </Link>
              </ProjectBox>
              <ProjectBox
                title="FAST TYPING"
                subtitle="a typing challenge."
                tools="vue 3, composition api and typescript"
                description="its a cool js project with a few vue features."
              >
                <Link
                  href="https://github.com/dudusohne/fast-typing"
                  target="_blank"
                >
                  <IconButton
                    variant="outline"
                    borderColor="gray.400"
                    aria-label="Call Sage"
                    fontSize={30}
                    icon={<RiGithubFill color={color} />}
                    _hover={{
                      background: "red.500",
                      color: "black.500",
                      borderColor: "black",
                      fontColor: "black",
                    }}
                  />
                </Link>
                <Link
                  href="https://fast-typing-six.vercel.app/"
                  target="_blank"
                  ml="1"
                >
                  <IconButton
                    variant="outline"
                    borderColor="gray.400"
                    aria-label="Call Sage"
                    fontSize={30}
                    icon={<FiGlobe color={color} />}
                    _hover={{
                      background: "red.500",
                      color: "black.500",
                      borderColor: "black",
                      fontColor: "black",
                    }}
                  />
                </Link>
              </ProjectBox>
            </SimpleGrid>
          </Flex>
          {/* <ParallaxLayer offset={0.7} speed={3} style={{ backgroundColor: '#151924', height: '10vh', zIndex: -1 }} /><ParallaxLayer offset={0.9} speed={4} style={{ backgroundColor: '#f3ba65', height: '20vh' }} /><ParallaxLayer
                  offset={0.6}
                  speed={0.5}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                  }}>
                </ParallaxLayer> */}
          <Flex flexDirection="column" mt="10">
            <Text
              as="span"
              fontSize={22}
              fontWeight="bold"
              color={color}
              mb="5"
            >
              WORK STACK
            </Text>
            <Flex flexDirection="row" justify="flex-start">
              <MiniCard
                title="VUE"
                badge="green"
                description="front-end: interfaces, components and more."
                icon={FaVuejs}
                iconColor="green.400"
              />
              <MiniCard
                title="Javascript"
                badge="yellow"
                description="mostly vanilla js, but also some es6 features."
                icon={SiJavascript}
                iconColor="yellow.400"
              />
              <MiniCard
                title="Typescript"
                badge="blue"
                description="front-end"
                icon={SiTypescript}
                iconColor="blue.400"
              />
            </Flex>
            <Flex flexDirection="row" justify="flex-start" mt="2" mb="10">
              <MiniCard
                title="PYTHON"
                badge="yellow"
                description="back-end"
                icon={FaPython}
                iconColor="yellow.400"
              />
              <MiniCard
                title="SQL"
                badge="cyan"
                description="database"
                icon={GrMysql}
                iconColor="cyan.400"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
