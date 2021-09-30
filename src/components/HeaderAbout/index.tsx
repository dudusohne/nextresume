import { Flex, useBreakpointValue, IconButton, Icon, Text } from '@chakra-ui/react'
import { NotificationsNav } from './NotificationsNav';
import { Logo } from '../Header/Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function HeaderAbout() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
            {!isWideVersion && (
                <IconButton
                    aria-label="Open menu"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                ></IconButton>
            )}
            <Logo />

            <Flex align="center" ml="auto">

                <NotificationsNav />


            </Flex>
            <Text fontSize={28} fontWeight="bold">Eduardo Sohne</Text>
        </Flex>
    )
}