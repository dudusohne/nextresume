import React from 'react'
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

import { SidebarNav } from './SidebarNav'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

interface SidebarProps {
    open: any;
    close: any;
}

export function Sidebar({open, close}: SidebarProps) {
    const { isOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    const sidebarBg = useColorModeValue("gray.200", "gray.800")

   

    if (isDrawerSidebar) {
        return (
            <Drawer
                isOpen={open}
                placement='left'
                onClose={close}
            >
                <DrawerOverlay height="100%" width="100%" />
                <DrawerContent bg={sidebarBg} p="4" maxHeight="100%">
                    <DrawerCloseButton color="red" />
                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Box as="aside" w="64" mr="2">
            <SidebarNav />
        </Box>
    )
}