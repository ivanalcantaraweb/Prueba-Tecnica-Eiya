import Title from "../../components/title/title";
import FormAddProduct from "../../components/forms/formAddProduct";
import { Flex } from "@chakra-ui/react";
const AddProducts = () => {
  return (
    <section>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
        marginBottom={"1rem"}
      >
        <Title type="Title">🔖 Agregar producto</Title>
      </Flex>

      <FormAddProduct />
    </section>
  );
};

export default AddProducts;
