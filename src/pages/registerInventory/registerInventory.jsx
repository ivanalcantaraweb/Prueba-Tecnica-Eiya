import FormRegisterInventory from "../../components/forms/formRegisterInventory";
import Title from "../../components/title/title";
import { Flex } from "@chakra-ui/react";
import { FilePlus } from "react-feather";

const RegisterInventory = () => {
  return (
    <section>
       <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
        marginBottom={"1rem"}
      >  <Title type="Title"><FilePlus  height={"36px"} width={"36px"} /> Registrar inventario</Title></Flex>
     
      <FormRegisterInventory/>
    </section>
  );
};

export default RegisterInventory;
