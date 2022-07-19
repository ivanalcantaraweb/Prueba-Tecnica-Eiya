import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TableComponent from "../../components/table/table";
import { useEffect, useState } from "react";
import EmptyStateNoResults from "../../components/emptystates/noResults";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const params = useParams();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    setSearchQuery(
      products.filter((product) =>
        product.title.toLowerCase().includes(params.querySearch.toLowerCase())
      )
    );
  }, [products, params]);

  return (
    <section>
      <h1>Busqueda</h1>
      {searchQuery && searchQuery.length > 0 ? (
        <TableComponent productsState={searchQuery}></TableComponent>
      ) : (
        <EmptyStateNoResults/>
      )}
    </section>
  );
};

export default Search;
