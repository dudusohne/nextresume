import { Flex, Text, Box, useColorModeValue, Stack } from '@chakra-ui/react';

export function AboutData() {
    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("gray.800", "gray.200")
    const border = useColorModeValue("gray.200", "gray.300")

    return (
        <Box bg={border} borderRadius={12} py="4" px="4" maxWidth="520px">
            <Stack spacing="2">
                <Flex justify="space-between" direction="row">
                    <Text as="span" size="sm" fontWeight="bold">Fulltime Job:<Text as="p" fontSize={22} fontWeight="normal">React Developer</Text></Text>
                    <Text as="span">Company:<Text as="p">Smart Marketing Digital</Text></Text>
                </Flex>
                <Flex justify="space-between" align="center">
                    <Text as="span">Period:<Text as="p">03/2021 / Present</Text></Text>
                    <Text as="span">Role:<Text as="p">Web Developer</Text></Text>
                </Flex>
            </Stack>
        </Box>
    )
}