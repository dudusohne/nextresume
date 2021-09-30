import { extendTheme, ThemeConfig } from '@chakra-ui/react';


const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    font: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    // styles: {
    //     global: {
    //         body: {
    //             bg: 'gray.200',
    //             color: 'gray.50',
    //         }
    //     }
    // }
})