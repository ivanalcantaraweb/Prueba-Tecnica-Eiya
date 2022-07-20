import ButtonComponent from "../../components/button/button";
import TableComponent from "../../components/table/table";
import { Flex } from "@chakra-ui/react";
import Title from "../../components/title/title";
import { Archive } from "react-feather";
import { useSelector } from "react-redux";
import EmptyStateNoProducts from "../../components/emptystates/noproducts";

const Inventory = () => {
  const products = useSelector((state) => state.products);
  return (
    <section>
      <Flex
        flexDirection={{sm: "row", base: "column"}}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
        marginBottom={"1rem"}
       
      >
        <Title type="Title" >
          <Archive height={"36px"} width={"36px"} /> Inventario general
        </Title>
        <Flex justifyContent={"flex-end"}  marginTop={{base: "1rem", sm: "0rem"}}>
          <ButtonComponent color={"purple"} href={"agregar-producto"} size="md">
            Agregar producto
          </ButtonComponent>
        </Flex>
      </Flex>
      {products.length < 1 ? (
        <EmptyStateNoProducts />
      ) : (
        <TableComponent productsState={products}></TableComponent>
      )}
    </section>
  );
};
export default Inventory;