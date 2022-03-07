import { Box, Stack, Text, Button, useColorModeValue, Divider } from "@chakra-ui/react";

interface ProjectBoxProps {
    title?: string;
    subtitle?: string;
    tools?: string;
    description?: string;
    buttonText?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export function ProjectBox({ title, subtitle, tools, description, buttonText, children, onClick }: ProjectBoxProps) {
    const bg = useColorModeValue("gray.50", "gray.900")
    const color = useColorModeValue("gray.800", "gray.200")
    const border = useColorModeValue("gray.200", "gray.300")

    return (
        <Box p="8" borderRadius={8} borderWidth={1} borderColor={border} transition="0.4s ease" background={bg} _hover={{ borderColor: 'red.300', borderRadius: '30px' }}>
            <Stack spacing="4">
                <Box>
                    <Text as="span" color={color} fontWeight="bold" fontSize={30}>{title}</Text>
                    <Divider opacity="0.1" />
                    <Text color="red.600" fontWeight="600">{subtitle}</Text>
                </Box>
                <Box>
                    <Text as="span" color={color} fontWeight="600" fontSize={22}>tools and techs:</Text>
                    <Text color={color}>{tools}</Text>
                </Box>
                <Box>
                    <Text as="span" color={color} fontWeight="600" fontSize={22}>core functions:</Text>
                    <Text color={color}>
                        {description}
                    </Text>
                    {children}
                </Box>
                <Button onClick={onClick}>{buttonText}</Button>
            </Stack>
        </Box>
    )
}