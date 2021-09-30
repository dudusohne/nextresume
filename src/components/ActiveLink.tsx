import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useColorModeValue } from '@chakra-ui/react';

interface ActiveLinkProps extends LinkProps {
    children?: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()
    const color = useColorModeValue("gray.800", "gray.200")
    
    let isActive = false;

    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if (!shouldMatchExactHref && 
        (asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'red.500' : color
            })}
        </Link>
    )
}