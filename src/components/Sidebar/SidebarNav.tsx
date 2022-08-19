import { Avatar, Stack, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SidebarNav() {

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const nameColor = useColorModeValue("gray.800", "orange.200")

  return (
    <Stack spacing="12" align="flex-start" zIndex={10}>
      <Avatar width="200px" height="200px" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" alignSelf="center" border={`2px solid orange`} />
      {isDrawerSidebar ?
        <>
          <Text fontSize="28" alignSelf="center" color={nameColor} fontWeight="bold">Eduardo Sohne</Text>
        </> : ''}
      <NavSection title="CONTACT">
        <NavLink
          icon={RiGithubFill}
          href="https://github.com/dudusohne"
          target="_blank"
        >
          Github
        </NavLink>
        <NavLink
          icon={RiLinkedinBoxFill}
          href="https://www.linkedin.com/in/eduardo-sohne-62a183118/"
          target="_blank"
        >
          Linkedin
        </NavLink>
        <NavLink
          icon={SiGmail}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dudu.hit@gmail.com"
          target="_blank"
        >
          Send me a Gmail
        </NavLink>
      </NavSection>
    </Stack>
  );



}
