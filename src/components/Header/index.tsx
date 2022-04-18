import React from 'react';
import { Flex, useBreakpointValue, IconButton, Icon, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, Link, Stack, HStack } from '@chakra-ui/react'
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { Logo } from './Logo';
import { RiMenuLine, RiWhatsappFill } from 'react-icons/ri';
import { HeaderProps } from '../../Interface/interface';
import { SidebarNav } from '../Sidebar/SidebarNav';

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center" zIndex="10">
            {!isWideVersion && (
                <>
                    <IconButton
                        aria-label="Open menu"
                        icon={<Icon as={RiMenuLine} />}
                        fontSize="24"
                        variant="unstyled"
                        onClick={onOpen}
                        mr="2"
                        current={btnRef}
                    ></IconButton>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}

                    >
                        <DrawerOverlay />
                        <DrawerContent bg="gray.800" p="4">
                            <DrawerCloseButton />
                            <DrawerHeader>Navegação</DrawerHeader>
                            <DrawerBody>
                                <SidebarNav />
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            )}
            <Logo />

            <Flex align="center" ml="auto">
                <NotificationsNav />
                {isWideVersion ?
                    <HStack spacing="4">
                        <Link href="https://api.whatsapp.com/send?phone=5551997951166" target="_blank">
                            <IconButton
                                variant="outline"
                                borderColor="gray.400"
                                aria-label="Call Sage"
                                fontSize="20px"
                                borderRadius="25px"
                                icon={<RiWhatsappFill color="gray" />}
                                transition="0.5s"
                                _hover={{ background: 'orange.200' }}
                            />
                        </Link>
                        <Divider orientation="vertical" />
                    </HStack>
                    : null}
            </Flex>
        </Flex>
    )
}