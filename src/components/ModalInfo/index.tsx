import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';

export interface ModalInfoProps {
    isOpenModal: any;
    onCloseModal: any;
}

export function ModalInfo({ isOpenModal, onCloseModal }: ModalInfoProps) {


    return (
        <>
            <Modal isOpen={isOpenModal} onClose={onCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh</span>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onCloseModal}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}