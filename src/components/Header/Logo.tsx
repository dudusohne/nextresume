import { Text } from '@chakra-ui/react';

export function Logo() {
    return (
        <Text
            as="span"
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            color="gray.700"
        >
            next
            <Text
                color="black"
                as="span"
            >
                resume  
            </Text>
        </Text>
    );
}