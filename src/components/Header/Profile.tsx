import { Text, Box, Avatar, Flex } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Eduardo Sohne</Text>
                    <Text color="gray.300" fontSize="small">
                        dudu.hit@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" />
        </Flex>
    );
}