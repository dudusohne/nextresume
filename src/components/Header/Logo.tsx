import { Text } from '@chakra-ui/react';

export function Logo() {
    return (
        <Text
            as="span"
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
        >
            next
            <Text
                color="blue.500"
                as="span"
            >
                resume  
            </Text>
        </Text>
    );
}