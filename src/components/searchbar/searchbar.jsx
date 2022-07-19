import { InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [queryParam, setQueryParam] = useState();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setQueryParam(e.target.value);
  };

  const handleSearch = () => {
    if (queryParam) {
      navigate(`buscar/${queryParam}`, { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };
  return (
    <div>
      <InputGroup w={"500px"}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          bg={"#f9f9f9"}
          type="text"
          placeholder="Buscar productos por nombre"
          onChange={(e) => handleOnChange(e)}
        />
        <Button colorScheme={"yellow"} onClick={() => handleSearch()}>
          Buscar
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
