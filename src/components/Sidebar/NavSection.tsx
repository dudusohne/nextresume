import { ReactNode } from 'react';
import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

interface NavSectionProps {
    title: string;
    children?: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="black" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    );
}