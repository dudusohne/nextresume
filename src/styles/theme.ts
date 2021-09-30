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
                bg: 'gray.200',
                color: 'gray.50'
            }
        }
    }
})