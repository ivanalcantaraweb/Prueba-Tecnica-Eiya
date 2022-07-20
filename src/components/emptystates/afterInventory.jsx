import { Flex, Image } from "@chakra-ui/react";
import ImageEmptyState from "../../media/emptyStates/salidaInventario.png";
import Title from "../title/title";

const AfterInventory = ({ inventory }) => {
  return (
    <Flex
      height={"400px"}
      borderRadius={"8px"}
      justify={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Image
        maxWidth={"300px"}
        marginBottom={"2rem"}
        src={ImageEmptyState}
        alt="empty state"
      />
      <Title type={"Subtitle"}> Salida del inventario de {-inventory} productos</Title>
    </Flex>
  );
};

export default AfterInventory;
