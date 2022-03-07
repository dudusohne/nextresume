import { Flex, useBreakpointValue, IconButton, Icon, Divider } from '@chakra-ui/react'
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { Logo } from './Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';
import { HeaderProps } from '../../Interface/interface';

export function Header({ withProfile = false }: HeaderProps) {
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
                {!!withProfile ?
                    <>
                        <Divider orientation="vertical" />
                        <Profile showProfileData={isWideVersion} />
                    </>
                    : null}
            </Flex>
        </Flex>
    )
}