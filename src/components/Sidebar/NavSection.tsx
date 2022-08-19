import { ReactNode } from 'react';
import { Box, Text, Stack, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import { is } from '@react-spring/shared';

interface NavSectionProps {
    title: string;
    children?: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
      })
    
    
    const color = useColorModeValue("gray.600", "gray.500")

    return (
        <Box>
            <Text fontWeight="bold" color={color} fontSize="small" mt="10">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    );
}