import { Grid, GridItem, Flex} from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import Logo from "../logo/logo";
import Nav from "../navigation/nav";
import SearchBar from "../searchbar/searchbar";

const Layout = ({ children }) => {
  return (
    <Grid
      gridTemplateRows={{ sm: "repeat(3, 1fr)", base: "300px 1fr"}}
      gridTemplateColumns={{ sm:"repeat(12, 1fr)", base: "repeat(4, 1fr)"}} 
      minH="100vh"
    >
      <GridItem colStart={{sm: 1, base: 1}} colEnd={{sm: 3, base: 5}} rowStart={{sm: 1, base: 1}} rowEnd={{sm: 4, base: 2}} bg={COLORS.white}>
        <Grid h="100%" templateRows="150px 1fr" templateColumns="1fr">
          <GridItem col={1}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h="100%"
              padding={"1rem"}
            >
              <Logo/>
            </Flex>
          </GridItem>
          <GridItem  padding={"1rem 0px"}>
            <Nav />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem colStart={{sm: 3, base: 1}} colEnd={{sm: 13, base: 13}} rowStart={{sm: 1, base: 2}} rowEnd={{sm: 4, base: 2}} overflowY={{sm: "none", base: "scroll"}} bg="#F4F4F4">
        <Grid h="100%" templateRows="100px 1fr" templateColumns="1fr" display={{sm: "grid", base: "block"}}>
          <GridItem col={1}>
            <Flex
              justifyContent={"flex-end"}
              alignItems={"center"}
              h="100%"
              padding={"1rem"}
            >
              <SearchBar />
            </Flex>
          </GridItem>
          <GridItem padding={"1rem"}>{children}</GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};
export default Layout;
