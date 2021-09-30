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
        // eslint-disable-next-line @next/next/link-passhref
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center"{...rest}>
                <Icon as={icon} fontSize="20" color="gray.700"/>
                <Text ml="4" fontWeight="medium" color="gray.700">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}