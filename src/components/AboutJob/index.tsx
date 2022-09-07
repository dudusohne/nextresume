import { Text, useColorModeValue, Box, Flex } from '@chakra-ui/react';
import { Job } from '../../interface/interface';

export function AboutJob({ job, company, period, role, description, time }: Job) {
    const bg = useColorModeValue("gray.800", "gray.700")
    const title = useColorModeValue("gray.200", "yellow.300")
    const companyColor = useColorModeValue("gray.200", "yellow.100")
    const text = useColorModeValue("gray.200", "gray.300")

    return (
        <Box bg="gray.900" maxWidth={540} borderRadius={6} border="1px solid #434950" ml="1" mt="2">
            <Text as="span" fontSize="20px" fontWeight="bold" px="2" color={title}>{job}</Text>
            <Flex bg={bg} flexDirection="column" mt="2" p="2">
                <Text as="span" color={companyColor}>{company}</Text>
                <Text as="span" color="red.200" fontSize="12px">{time}</Text>
                <Text as="span" color={text} opacity="0.7"><Text as="span" opacity="0.7">Period:</Text> {period}</Text>
                <Text as="span" color={text} fontWeight="bold">{role}</Text>
                {description &&
                    <Text as="span" color={text} mt="3">{description}</Text>
                }
            </Flex>
        </Box>
    )
}