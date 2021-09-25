import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiGithubFill, RiLinkedinFill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'

export function Sidebar() {

    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">GENERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Projects</Text>
                        </Link>
                        <Link display="flex" align="center">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">About</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">CONTACT</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center">
                            <Icon as={SiGmail} fontSize="20" />
                            <Text ml="4" fontWeight="medium">E-mail</Text>
                        </Link>
                        <Link display="flex" align="center">
                            <Icon as={RiLinkedinFill} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Linkedin</Text>
                        </Link>
                        <Link display="flex" align="center">
                            <Icon as={RiGithubFill} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Github</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack >
        </Box>
    )
}