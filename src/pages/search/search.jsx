import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TableComponent from "../../components/table/table";
import { useEffect, useState } from "react";
import EmptyStateNoResults from "../../components/emptystates/noResults";
import { Flex, Text } from "@chakra-ui/react";
import { Search as SearchIcon, XCircle } from "react-feather";
import Title from "../../components/title/title";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const params = useParams();
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(
      products.filter((product) =>
        product.title.toLowerCase().includes(params.querySearch.toLowerCase())
      )
    );
  }, [products, params]);

  return (
    <section>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
        marginBottom={"1rem"}
      >
        {" "}
        <Title type="Title">
          <SearchIcon height={"36px"} width={"36px"} /> Resultados de búsqueda
          para:{" "}
          <Text as="i" color={"purple.500"}>
            {" "}
            {params.querySearch}
          </Text>
          <XCircle
            height={"36px"}
            width={"36px"}
            color="red"
            onClick={() => navigate("/")}
          />
        </Title>
      </Flex>

      {searchQuery && searchQuery.length > 0 ? (
        <TableComponent productsState={searchQuery}></TableComponent>
      ) : (
        <EmptyStateNoResults />
      )}
    </section>
  );
};

export default Search;
