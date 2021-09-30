import { Text, useColorModeValue } from '@chakra-ui/react';

export function Logo() {
    
    const color = useColorModeValue("gray.800", "gray.200")
    
    return (
        <Text
            as="span"
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            color="gray.500"
        >
            next
            <Text
                color={color}
                as="span"
            >
                portfolio  
            </Text>
        </Text>
    );
}