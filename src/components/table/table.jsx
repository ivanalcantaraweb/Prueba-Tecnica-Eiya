import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Image, Flex, Button} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Edit, File, Trash } from "react-feather";
import ButtonComponent from "../button/button";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../features/products/productsSlice";
import { useState } from "react";
import AlertDialogDelete from "../alertDialog/alertDialogDelete";
import { TITLES } from "../../utils/consts";
import { COLORS } from "../../utils/colors";

const TableComponent = ({ productsState }) => {
  const [item, setItem] = useState(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    setItem(item);
    onOpen();
  };

  const deleteItem = () => {
    dispatch(deleteProduct(item));
    onClose();
  };

  return (
    <>
      <TableContainer
        margin={"1rem 0px 3rem 0px"}
        backgroundColor={COLORS.white}
        borderRadius={8}
      >
        <Table variant={"simple"} colorScheme={"facebook"}>
          <Thead>
            <Tr>
              {TITLES.map((item, index) => (
                <Th key={index}>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {productsState.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>
                    <Text
                      wordBreak={"break-word"}
                      whiteSpace={"normal"}
                      display={"block"}
                      fontSize={"xs"}
                      noOfLines={2}
                    >
                      {item.title}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      wordBreak={"break-word"}
                      whiteSpace={"normal"}
                      display={"block"}
                      fontSize={"xs"}
                      noOfLines={2}
                    >
                      {item.description}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontSize={"s"}>${item.price}</Text>
                  </Td>
                  <Td>
                    <Image
                      borderRadius={8}
                      src={item.image}
                      alt="imagen producto"
                      maxWidth={"80px"}
                      mixBlendMode={"multiply"}
                    />
                  </Td>
                  <Td>{item.countInventory}</Td>
                  <Td>
                    <Flex flexDirection={"column"} gap={"0.5rem"}>
                      <ButtonComponent
                        href={`${"editar-producto"}/${item.id}`}
                        size={"xs"}
                      >
                        <Edit width={"16px"} /> Editar producto
                      </ButtonComponent>

                      <ButtonComponent
                        size={"xs"}
                        href={`${"registrar-inventario"}/${item.id}`}
                      >
                        <File width={"16px"} /> Modificar inventario
                      </ButtonComponent>
                      <Button
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        size={"xs"}
                        color="red"
                        display={"flex"}
                        gap={"0.5rem"}
                      >
                        <Trash width={"16px"} /> Eliminar producto
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <AlertDialogDelete
        isOpen={isOpen}
        onClose={onClose}
        deleteItem={deleteItem}
      />
    </>
  );
};
export default TableComponent;