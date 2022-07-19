import { Heading, Spacer, Text } from "@chakra-ui/react"
import { Flex, Box } from "@chakra-ui/react";
import { HelpCircle } from "react-feather";
import Title from "../../components/title/title";

const About = () => {
    return <section>
       <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
        marginBottom={"1rem"}
      >  <Title type="Title"><HelpCircle  height={"36px"} width={"36px"} /> Acerca de este proyecto</Title></Flex>
     
    <Box bg={"#f9f9f9"} minHeight={"400px"} padding={"3rem"}>
        <Text> Proyecto realizado por José Iván Alcantara.</Text>
        <Text> Como parte de un examen práctico para entrar a la empresa Eiya! bajo el rol de Front-end Developer.</Text>
        <Spacer height={"3rem"}></Spacer>
        <Heading size={"lg"} marginBottom={"1rem"}> Tecnologías usadas: </Heading>
        <Text> 💻 React.js </Text>
        <Text> 📦 Redux ToolKit </Text>
        <Text> 🖼 ChakraUI </Text>
        <Text> 🛣 React Router V6 </Text>
        <Text> ⭐️ Feather Icons </Text>
        <Spacer height={"3rem"}></Spacer>
        <Text> Ademas se consumió la API: https://fakestoreapi.com/ para la obtención de información de productos.</Text>
    </Box>
    </section>
    
}

export default About