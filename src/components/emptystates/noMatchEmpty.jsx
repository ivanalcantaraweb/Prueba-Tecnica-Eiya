import { Flex, Image, Button } from "@chakra-ui/react";
import ImageEmptyState from "../../media/emptyStates/nomatch.png";
import Title from "../title/title";
import { NavLink } from "react-router-dom";

const NoMatchEmpty = ({ inventory }) => {
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
      <Title type={"Subtitle"}> No se encontró la página </Title>
      <Button marginTop={"1rem"}>
        <NavLink to={"/"}>
            Regresar al inicio
        </NavLink>
      </Button>
    </Flex>
  );
};

export default NoMatchEmpty;
