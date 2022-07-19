import { Button, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import NoResults from "../../media/emptyStates/emptyNoResults.png";
import Title from "../title/title";

const EmptyStateNoResults = () => {
  return (
    <Flex
      bg={"#F9F9F9"}
      height={"500px"}
      borderRadius={"8px"}
      justify={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Image
        maxWidth={"300px"}
        marginBottom={"2rem"}
        src={NoResults}
        alt="empty state"
      />
      <Title type={"Subtitle"}> No se encontraron resultados a su búsqueda</Title>
      <Button marginTop={"1rem"}>
        <NavLink to={"/"}>
            Regresar al inicio
        </NavLink>
      </Button>
    </Flex>
  );
};

export default EmptyStateNoResults;
