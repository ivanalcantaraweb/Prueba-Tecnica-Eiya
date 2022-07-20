import { Grid, GridItem, Flex} from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import Logo from "../logo/logo";
import Nav from "../navigation/nav";
import SearchBar from "../searchbar/searchbar";

const Layout = ({ children }) => {
  return (
    <Grid
      gridTemplateRows={"repeat(3, 1fr)"}
      gridTemplateColumns={"repeat(12, 1fr)"}
      minH="100vh"
    >
      <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={4} bg={COLORS.white}>
        <Grid h="100%" templateRows="100px 1fr" templateColumns="1fr">
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
      <GridItem colStart={3} colEnd={13} rowStart={1} rowEnd={4} bg="#F4F4F4">
        <Grid h="100%" templateRows="100px 1fr" templateColumns="1fr">
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
