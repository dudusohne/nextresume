import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
    },
    font: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})