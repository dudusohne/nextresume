import { Stack, Flex, Image, Text } from '@chakra-ui/react';

export function BottomSlideContent() {

    return (
        <Stack spacing="4" direction="row">
            <Flex direction="column" align="flex-start" justify="center">
                <Image src="https://i.imgur.com/fQ7y0EQ.png" alt="casa libre img" boxSize="300px" objectFit="cover" borderRadius="12" style={{ border: '1px solid #fff' }} />
                <Text as="span" fontSize={18} color="black" fontWeight="700">LOGIN PAGE</Text>
            </Flex>
            <Flex direction="column" align="flex-start" justify="center">
                <Image src="https://i.imgur.com/eEs8IiI.png" alt="casa libre img2" boxSize="300px" objectFit="cover" borderRadius="12" style={{ border: '1px solid #fff' }} />
                <Text as="span" fontSize={18} color="black" fontWeight="700">HOME PAGE - PANEL</Text>
            </Flex>
            <Flex direction="column" align="flex-start" justify="center">
                <Image src="https://i.imgur.com/mcF0SkT.png" alt="casa libre img3" boxSize="300px" objectFit="cover" borderRadius="12" style={{ border: '1px solid #fff' }} />
                <Text as="span" fontSize={18} color="black" fontWeight="700">PRODUCT REGISTER</Text>
            </Flex>
            <Flex direction="column" align="flex-start" justify="center">
                <Image src="https://i.imgur.com/kGMeJpK.png" alt="casa libre img4" boxSize="300px" objectFit="cover" borderRadius="12" style={{ border: '1px solid #fff' }} />
                <Text as="span" fontSize={18} color="black" fontWeight="700">DASHBOARD</Text>
            </Flex>
            <Flex direction="column" align="flex-start" justify="center">
                <Image src="https://i.imgur.com/KOaQfAd.png" alt="casa libre img4" boxSize="300px" objectFit="cover" borderRadius="12" style={{ border: '1px solid #fff' }} />
                <Text as="span" fontSize={18} color="black" fontWeight="700">COMMAND OPENED</Text>
            </Flex>
        </Stack>
    )
}