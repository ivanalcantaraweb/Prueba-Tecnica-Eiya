import { Flex, Image } from "@chakra-ui/react";
import ImageEmptyState from "../../media/emptyStates/llegadaInventario.png";
import Title from "../title/title";

const BeforeInventory = ({ inventory }) => {
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
      <Title type={"Subtitle"}> Llegada al inventario de {inventory} productos</Title>
    </Flex>
  );
};

export default BeforeInventory;
