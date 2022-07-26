import { Flex, Image } from "@chakra-ui/react";
import ImageEmptyState from "../../media/emptyStates/noProducts.png";
import Title from "../title/title";
import { COLORS } from "../../utils/colors";

const EmptyStateNoProducts = () => {
  return (
    <Flex
      bg={COLORS.white}
      height={"500px"}
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
      <Title type={"Subtitle"}> No hay productos en el inventario</Title>
    </Flex>
  );
};

export default EmptyStateNoProducts;
