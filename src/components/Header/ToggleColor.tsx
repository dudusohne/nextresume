import { HStack, Switch, useColorMode } from '@chakra-ui/react';

export function ToggleColor() {
    const { toggleColorMode } = useColorMode()
    
    return (
        <HStack
            color="gray.300"
        >
            <Switch colorScheme="red" size="md" onChange={toggleColorMode}> </Switch>
        </HStack>
    );
}