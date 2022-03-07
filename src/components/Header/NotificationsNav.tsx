import { HStack, Switch, useColorMode, Button, useDisclosure, Link, IconButton } from '@chakra-ui/react';
import { RiWhatsappFill } from 'react-icons/ri';

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
            >
                <Link href="https://api.whatsapp.com/send?phone=5551997951166" target="_blank">
                    <IconButton
                        variant="outline"
                        borderColor="gray.400"
                        aria-label="Call Sage"
                        fontSize="20px"
                        icon={<RiWhatsappFill color="gray" />}
                        transition="0.5s"
                        _hover={{ background: 'red.300', color: 'gray.600' }}
                    />
                </Link>
                <Switch colorScheme="red" size="md" onChange={toggleColorMode}> </Switch>
            </HStack>
        </>
    );
}