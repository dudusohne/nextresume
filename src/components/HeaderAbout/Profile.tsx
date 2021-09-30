import { Text, Box, Avatar, Flex, useColorModeValue } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {

    const color = useColorModeValue("gray.800", "gray.200")

    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text color={color}>Eduardo Sohne</Text>
                    <Text color={color} fontSize="small">
                        dudu.hit@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" />
        </Flex>
    );
}