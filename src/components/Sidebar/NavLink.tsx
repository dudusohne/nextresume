import { ElementType } from 'react';
import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
    children?: string;
    icon: ElementType;
    href: string;
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
    
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center"{...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}