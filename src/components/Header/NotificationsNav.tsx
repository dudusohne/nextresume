import { HStack, Switch, useColorMode, Button, useDisclosure } from '@chakra-ui/react';

export function NotificationsNav() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <HStack
                spacing={["6", "8"]}
                mx={["6", "8"]}
                paddingRight={["6", "8"]}
                py="1"
                color="gray.300"
                borderRightWidth={1}
                borderColor="gray.700"
            >
                <Switch colorScheme="red" size="md" onChange={toggleColorMode}> </Switch>
            </HStack>
        </>
    );
}