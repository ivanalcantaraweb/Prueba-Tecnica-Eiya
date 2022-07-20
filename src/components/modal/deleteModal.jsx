import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";
import { useState } from "react";

const DeleteModal = ({id}) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Modal 
    isOpen={isOpen} 
    // onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Eliminar elemento</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        Desea eliminar el elemento: {id}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={setIsOpen(false)}>
            Cancelar
          </Button>
          <Button variant="ghost">Eliminar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DeleteModal;