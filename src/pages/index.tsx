import { Flex, Button, Stack, Avatar, Text } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (

    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg="gray.800" padding="8" borderRadius={8} flexDir="column">

        <Flex justify="space-between" align="center" px="2">
          <Stack spacing="2">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="50" h="5">Eduardo</Text>
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="50" h="8">Sohne</Text>
            <Stack spacing="0.1">
            <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="tight" w="50" h="5" color="blue.700">software</Text>
            <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="tight" w="50" h="8" color="blue.700">engineer</Text>
            </Stack>

          </Stack>
          <Avatar size="2xl" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" borderColor="blue.300" borderWidth={3} />
        </Flex>

        <Button type="submit" mt="6" colorScheme="blue" size="md">Acessar portifólio</Button>
      </Flex>
    </Flex >
  )
}
