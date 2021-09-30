import { Flex, Button, Stack, Avatar, Text } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import router from 'next/router';

export default function SignIn() {

  return (

    <Flex w="100vw" h="100vh" align="center" justify="center" direction="column" bg="white">
      <Text fontSize={18} fontWeight="500" letterSpacing="tight" w="50" h="5" color="red.500" mb="8">UNDER CONSTRUCTION</Text>
      <Flex as="form" w="100%" maxWidth={360} bg="gray.100" padding="8" borderRadius={8} flexDir="column" borderColor="gray.300" borderWidth={1}>

        <Flex justify="space-between" align="center" px="2">
          <Stack spacing="5">
            <Text fontSize={18} fontWeight="500" letterSpacing="tight" w="50" h="5" color="gray.900">portfolio</Text>
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="50" h="5" color="black">Eduardo</Text>
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="50" h="8" color="black">Sohne</Text>
            <Stack spacing="0.1">
              <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="tight" w="50" h="5" color="orange.500">software</Text>
              <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="tight" w="50" h="8" color="orange.500">engineer</Text>
            </Stack>

          </Stack>

          <Flex direction="column">
            <Avatar size="2xl" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4"  borderWidth={3} />
            <Button type="button" mt="4" fontWeight="bold" bgColor="black" size="md" onClick={() => router.push(`/home`)}>ACCESS</Button>
          </Flex>
        </Flex>

      </Flex>
    </Flex >
  )
}
