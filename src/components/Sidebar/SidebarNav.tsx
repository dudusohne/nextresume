import { Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection'


export function SidebarNav() {


    return (

        <Stack
            spacing="12"
            align="flex-start"
        >
            <NavSection title="GENERAL">
                <NavLink icon={RiDashboardLine} href="/home">Projects</NavLink>
                <NavLink icon={RiContactsLine} href="/about">About</NavLink>
            </NavSection>

            <NavSection title="CONTACT">
                {/* <NavLink icon={RiInputMethodLine} href="/email">Email</NavLink> */}
                <NavLink icon={RiGithubFill} href="https://github.com/dudusohne" target="_blank">Github</NavLink>
                <NavLink icon={RiLinkedinBoxFill} href="https://www.linkedin.com/in/eduardo-sohne-62a183118/" target="_blank">Linkedin</NavLink>
            </NavSection>
        </Stack >

    );
}