import { Badge, Flex, Icon, Text } from "@chakra-ui/react";

interface MiniCardProps {
    title: string;
    description: string;
    icon?: any;
    iconColor: string;
    badge: string;
}

export function MiniCard({ title, description, icon, iconColor, badge }: MiniCardProps) {

    return (
        <Flex
            width="fit-content"
            direction="column"
            p="2"
            bgColor="gray.00"
            border="1px solid"
            borderRadius="8px"
            borderColor="gray.600"
            mr="2"
            _hover={{ borderColor: 'red.900', background: 'gray.900', cursor: 'pointer', borderRadius: '16px', dropShadow: '0px 0px 8px rgba(214, 59, 59, 0.753)' }}
            transition="0.4s ease"
        >
            <Flex flexDirection="row" justify="space-between">
                <Badge variant='solid' colorScheme={badge} >
                    <Text fontSize={['12px', '16px', '16px', '18px']}>{title}</Text>
                </Badge>
                <Icon fontSize={['12px', '16px', '25px', '25px']} as={icon} ml="2" color={iconColor}/>
            </Flex>
            <Text>{description}</Text>
        </Flex>
    )
}