import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { OPCIONES_ALERT } from "../../utils/consts";
import AfterInventory from "../emptystates/afterInventory";
import BeforeInventory from "../emptystates/beforeInventory";

const AlertDialogChanges = ({
  updateElement,
  isOpen,
  onClose,
  type,
  beforeInventory,
  afterInventory,
}) => {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {OPCIONES_ALERT[type].title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {type === 1 && beforeInventory < afterInventory ? (
             <BeforeInventory inventory={afterInventory - beforeInventory }/>
            ) : (
              <AfterInventory inventory={afterInventory - beforeInventory }/>
            )}
            ¿Estás seguro que quieres {OPCIONES_ALERT[type].body}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>Cancelar</Button>
            <Button colorScheme="red" onClick={() => updateElement()} ml={3}>
              {OPCIONES_ALERT[type].button}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
export default AlertDialogChanges;
