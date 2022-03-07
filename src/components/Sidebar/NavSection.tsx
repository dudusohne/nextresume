import { ReactNode } from 'react';
import { Box, Text, Stack, Link, Icon, useColorModeValue } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

interface NavSectionProps {
    title: string;
    children?: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    
    const color = useColorModeValue("gray.300", "gray.200")

    return (
        <Box>
            <Text fontWeight="bold" color={color} fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    );
}