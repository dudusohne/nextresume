import { Button, Collapse, Box, useDisclosure } from '@chakra-ui/react';

export function ViewTransition() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <Button onClick={onToggle}>Click Me</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    p="40px"
                    color="white"
                    mt="4"
                    bg="teal.500"
                    rounded="md"
                    shadow="md"
                >
                    <p>view transition</p>
                </Box>
            </Collapse>
        </>
    )
}