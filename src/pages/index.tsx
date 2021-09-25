import { Flex, Button, Stack, Avatar, Text } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (

    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg="gray.800" padding="8" borderRadius={8} flexDir="column">

        <Flex justify="space-between" align="center" px="2">
          <Stack spacing="5">
            <Text fontSize={18} fontWeight="500" letterSpacing="tight" w="50" h="5" color="gray.400">portfolio</Text>
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="50" h="5">Eduardo</Text>
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="50" h="8">Sohne</Text>
            <Stack spacing="0.1">
              <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="tight" w="50" h="5" color="blue.700">software</Text>
              <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="tight" w="50" h="8" color="blue.700">engineer</Text>
            </Stack>

          </Stack>

          <Flex direction="column">
            <Avatar size="2xl" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" borderColor="blue.300" borderWidth={3} />
            <Button type="submit" mt="4" fontWeight="bold" colorScheme="orange" size="md">ACCESS</Button>
          </Flex>
        </Flex>

      </Flex>
    </Flex >
  )
}
