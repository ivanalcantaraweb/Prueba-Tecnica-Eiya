import { Edit } from "react-feather";
import FormEditProduct from "../../components/forms/formEditProduct";
import Title from "../../components/title/title";
import { Flex } from "@chakra-ui/react";

const EditProduct = () => {
  return (
    <section>
       <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
        marginBottom={"1rem"}
      >  <Title type="Title"><Edit  height={"36px"} width={"36px"} /> Editar producto</Title></Flex>
     
      <FormEditProduct/>
    </section>
  );
};

export default EditProduct;
