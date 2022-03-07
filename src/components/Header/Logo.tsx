import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

export function Logo() {

    const color = useColorModeValue("gray.800", "gray.300")
    const color2 = useColorModeValue("gray.400", "gray.600")
    const color3 = useColorModeValue("gray.600", "red.800")

    return (
        <Flex flexDirection="column">
            <Text
                as="span"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
                color={color}
            >
                eduardo
                <Text
                    color={color2}
                    as="span"
                >
                    sohne
                </Text>
            </Text>
            <Text
                as="span"
                fontSize={["12px", "14px", "16px", "16px"]}
                fontWeight="medium"
                letterSpacing="tight"
                color={color3}
                mt="-3"
                ml="2"
            >
                developer
            </Text>
        </Flex>
    );
}