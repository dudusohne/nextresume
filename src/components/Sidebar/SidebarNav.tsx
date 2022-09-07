import { Avatar, Spinner, Stack, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { useQuery } from "react-query";
import { User } from "../../interface/interface";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const { data: user, isFetching } = useQuery<User>('user', async () => {
    const response = await axios.get('https://api.github.com/users/dudusohne')
    return response.data;
  }, {
    staleTime: 3000 * 60 // 3 minutes
  })

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const nameColor = useColorModeValue("gray.800", "orange.200")

  return (
    <Stack spacing="12" align="flex-start" zIndex={10}>
      {!isFetching ?
        <Avatar width="200px" height="200px" name={user?.name} src={user?.avatar_url} alignSelf="center" border={`2px solid orange`} />
        :
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='orange.500'
          size='xl'
          alignSelf="center"
          justifySelf="center"
        />
      }
      {isDrawerSidebar ?
        <>
          <Text fontSize="28" alignSelf="center" color={nameColor} fontWeight="bold">{user?.name}</Text>
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
