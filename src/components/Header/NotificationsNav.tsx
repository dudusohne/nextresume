import { HStack, Switch, useColorMode, Button, useDisclosure, Link, IconButton } from '@chakra-ui/react';
import { RiWhatsappFill } from 'react-icons/ri';

export function NotificationsNav() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <HStack
                color="gray.300"
            >
                <Switch colorScheme="red" size="md" onChange={toggleColorMode}> </Switch>
            </HStack>
        </>
    );
}