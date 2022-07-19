import { NavLink } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Home, HelpCircle } from "react-feather";

const Nav = () => {
  let activeStyle = {
    color: "#7d5cc6",
    fontWeight: 600,
  };
  return (
    <nav>
      <Flex flexDirection={"column"} marginTop={"3rem"}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Box
            height={"70px"}
            display={"flex"}
            alignItems={"center"}
            _hover={{
              background: "#805AD5",
              color: "white",
              cursor: "pointer",
            }}
            padding={"1rem"}
            borderBottom={"1px solid #e3e3e3"}
            borderTop={"1px solid #e3e3e3"}
          >
            <Home />
            <Text marginLeft={"0.5rem"}>Home</Text>
          </Box>
        </NavLink>
        <NavLink
          to="acerca"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Box
            height={"70px"}
            display={"flex"}
            alignItems={"center"}
            _hover={{
              background: "#805AD5",
              color: "white",
              cursor: "pointer",
            }}
            padding={"1rem"}
            borderBottom={"1px solid #e3e3e3"}
          >
            <HelpCircle />
            <Text marginLeft={"0.5rem"}>Acerca de </Text>
          </Box>
        </NavLink>
      </Flex>
    </nav>
  );
};

export default Nav;
