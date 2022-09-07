import {
  Flex,
  SimpleGrid,
  Text,
  IconButton,
  useColorModeValue,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import router from "next/router";

import { RiGithubFill } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ProjectBox } from "../components/ProjectBox";
import { MiniCard } from "../components/MiniCard/MiniCard";

import { Job, PersonalProjects, WorkTechs } from "../interface/interface";
import { AboutJob } from "../components/AboutJob";

export default function Home() {
  const color = useColorModeValue("gray.800", "gray.200");
  const textColor = useColorModeValue("gray.500", "orange.400");
  const textColorTwo = useColorModeValue("gray.600", "orange.300");
  const textColorThree = useColorModeValue("gray.600", "orange.200");
  const textColorFour = useColorModeValue("gray.600", "orange.100");
  const { isOpen, onClose } = useDisclosure()

  const personalProjects: PersonalProjects[] = [
    {
      title: "POKEMON DESK",
      subtitle: "make your own pokemon team.",
      tools: "vue 3, composition api, typescript and quasar",
      description: "its a simple vue project that calls an pokemon api",
      buttonText: "click to visit",
      href: "https://pokemon-desk-team.vercel.app/",
      externalHref: "https://pokemon-desk-team.vercel.app/"
    },
    {
      title: "FINE DASH",
      subtitle: "this project has a purpose of test some React features, as Styled Component and React Query.",
      tools: "react, typescript, react query and styled components.",
      description: "its a showcase of my githubs repos, there's a few animations to see too.",
      href: "https://github.com/dudusohne/fine-dash"
    },
    {
      title: "BAR TABS",
      subtitle: "this project has a purpose of managing stock, tabs and sales for a pub.",
      tools: "react, typescript, firebase and sass.",
      description: "access only by auth with firebase realtime tabs- viewer with react hooks and realtime database, product inventory, daily and monthly cash - closer dashboard.",
    },
    {
      title: "THIS RESUME",
      subtitle: "this project has a purpose of show my personal portfolio.",
      tools: "next, typescript and chakra.ui",
      description: "shared the code of this project with other devs that are looking for a portfolio",
      href: "https://github.com/dudusohne/nextresume"
    },
    {
      title: "FAST TYPING",
      subtitle: "a typing challenge.",
      tools: "vue 3, composition api and typescript",
      description: "its a cool js project with a few vue features.",
      href: "https://github.com/dudusohne/fast-typing"
    }
  ]

  const workTechs: WorkTechs[] = [
    {
      title: "VUE",
      badge: "green",
      description: "front-end: interfaces, components and more. Using Vue 3 with composition api and setup script.",
      icon: "FaVuejs",
      iconColor: "green.400"
    },
    {
      title: "Javascript",
      badge: "yellow",
      description: "front-end: mostly vanilla js, but also some es6 features.",
      icon: "SiJavascript",
      iconColor: "yellow.400",
    },
    {
      title: "Typescript",
      badge: "blue",
      description: "front-end: sure, all typed.",
      icon: "SiTypescript",
      iconColor: "blue.400"
    },
    {
      title: "PYTHON",
      badge: "yellow",
      description: "back-end: using along side Django as an API.",
      icon: "FaPython",
      iconColor: "yellow.400"
    },
    {
      title: "SQL",
      badge: "cyan",
      description: "database",
      icon: "GrMysql",
      iconColor: "cyan.400"
    }
  ]

  const jobs: Job[] = [
    {
      job: "Web Developer",
      company: "Smart Marketing Digital",
      period: "03/21 -> 11/21",
      role: "Develop landing pages, sites and web apps.",
      description: "Marketing agency demands, like landing pages, sites and web apps. Work mostly with html/css/js and CMS's like wordpress.",
      time: "full-time"
    },
    {
      job: "React Developer",
      company: "Edubrahub",
      period: "10/21 -> 12/21",
      role: "Develop, refactor, maintain a React front-end app.",
      description: "Front-end React with typescript, styled components and redux.",
      time: "per-time"
    },
    {
      job: "Full-Stack Developer",
      company: "Simbiose",
      period: "11/21 -> present",
      role: "Full stack developer with focus on front, working mostly with VUE3 and python.",
      description: "Vue3, composition api, setup script, typescript, nuxt, python, django.",
      time: "full-time"
    }
  ]

  return (
    <Flex direction="column" h="100vh" align="center">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar open={isOpen} close={onClose} />
        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Flex flexDirection="column">
              <Text as="span" fontSize={22} fontWeight="bold" color={color} mb="5">ABOUT ME</Text>
              <Text as="span" fontSize={20} fontWeight="medium" color={textColor}>
                My name is Eduardo and Im a full-stack developer.
              </Text>
              <Text as="span" fontSize={20} fontWeight="medium" color={textColorTwo}>
                Im 31 years old and lives in Gramado in the southern Brazilian state of Rio Grande do Sul.
              </Text>
              <Text as="span" fontSize={20} fontWeight="medium" color={textColorThree}>
                My favorite language is Javascript(Typescript in fact) and I prefer front-end than back(who cares, right?).
              </Text>
              <Text as="span" fontSize={20} fontWeight="medium" color={textColorFour}>
                I have 2y experience with software development working with javascript mostly, <br></br> already use a few js frameworks and my actual favorite its Vue 3.
              </Text>
            </Flex>
            <Flex flexDirection="column" mt="10">
              <Text
                as="span"
                fontSize={18}
                fontWeight="bold"
                color={color}
                mb="5"
              >
                BESIDES CODING
              </Text>
              <Text as="span" fontSize={20} fontWeight="medium" color={textColorThree}>
                Im a great team player, used to collaborate with other devs to build software in all ways. <br></br>
                Have experience with Scrum, Kanban and other frameworks of that kind.
              </Text>

            </Flex>
            <Text
              as="span"
              fontSize={22}
              fontWeight="bold"
              color={color}
              mb="5"
              mt="10"
            >
              PERSONAL PROJECTS
            </Text>
            <SimpleGrid
              flex="1"
              gap="4"
              minChildWidth={320}
              align="flex-start"
              columns={3}
            >
              {personalProjects.map((project) => {
                return (
                  <ProjectBox
                    key={project.title}
                    title={project.title}
                    subtitle={project.subtitle}
                    tools={project.tools}
                    description={project.description}
                    buttonText={project.buttonText}
                    onClick={() => router.push('https://pokemon-desk-team.vercel.app/')}
                  >
                    <Link
                      href={project.href}
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
                    {project.externalHref &&
                      <Link
                        href={project.externalHref}
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
                    }
                  </ProjectBox>
                )
              })}
            </SimpleGrid>
          </Flex>
          <Flex flexDirection="column" mt="10">
            <Text
              as="span"
              fontSize={22}
              fontWeight="bold"
              color={color}
              mb="5"
            >
              EXPERIENCES
            </Text>
            <Flex flexDirection="row" justify="flex-start" flexWrap="wrap">
              {jobs.map(job => {
                return (
                  <AboutJob
                    key={job.job}
                    job={job.job}
                    company={job.company}
                    period={job.period}
                    role={job.role}
                    description={job.description}
                    time={job.time}
                  />
                )
              })}
            </Flex>
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
                {workTechs.map(workTech => {
                  return (
                    <MiniCard
                      key={workTech.title}
                      title={workTech.title}
                      badge={workTech.badge}
                      description={workTech.description}
                      icon={workTech.icon}
                      iconColor={workTech.iconColor}
                    />
                  )
                })}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
