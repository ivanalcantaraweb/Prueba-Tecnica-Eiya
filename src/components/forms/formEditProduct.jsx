import {
  Grid,
  GridItem,
  Flex,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  Image,
  InputLeftAddon,
  Box,
} from "@chakra-ui/react";
import ButtonComponent from "../button/button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../features/products/productsSlice";
import { LinkIcon } from "@chakra-ui/icons";
import { Fragment } from "react";


const FormEditProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsState = useSelector((state) => state.products);
  const [state, setState] = useState({
    id: undefined,
    title: "",
    description: "",
    price: undefined,
    image: undefined,
  });
  const [previewImage, setPreviewImage] = useState(false);

  const handleOnChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = () => {
    dispatch(editProduct(state));
    navigate("/");
  };

  useEffect(() => {
    if (params) {
      setState(
        productsState.find((product) => product.id == params.idProduct)
      ); /* eslint eqeqeq: 0 */
    }
  }, [params, productsState]);

  const handleChangeImage = () => {
    setPreviewImage(true);
  };

  return (
    <FormControl bg={"#f9f9f9"} padding={"2rem"} borderRadius={"8px"}>
      <Grid h="100%" templateRows="1fr" templateColumns="1fr 1fr" gap={"1rem"}>
        <GridItem padding={"1rem"}>
          {previewImage ? 
            <Fragment>
              <Box
                height={"350px"}
                width={"100%"}
                bg={"#fcfcfc"}
                border={"1px solid rgb(226, 232, 240)"}
                borderRadius={"8px"}
              >
                {" "}
                <Flex
                  justifyContent={"center"}
                  gap={"1rem"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  h={"100%"}
                >
                  <Image
                    maxWidth={"200px"}
                    minWidth={"100px"}
                    src={state.image}
                  />
                  <InputGroup width={"70%"} size="sm">
                    <InputLeftAddon children={<LinkIcon />} />
                    <Input
                      placeholder="Ingresa una URL"
                      name="image"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </InputGroup>
                 
                </Flex>
              </Box>
            </Fragment> : 
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h="100%"
              flexDirection={"column"}
            >
              <Image
                height={"400px"}
                width={"400px"}
                objectFit={"contain"}
                borderRadius={"8px"}
                src={state.image}
                mixBlendMode={"multiply"}
                marginBottom={"2rem"}
              ></Image>
              <Button
                colorScheme={"yellow"}
                onClick={() => handleChangeImage()}
              >
                Cambiar imagen
              </Button>
            </Flex>
          
          }
        </GridItem>
        <GridItem padding={"1rem"}>
          <FormLabel htmlFor="text">Nombre del producto</FormLabel>
          <Input
            type="text"
            marginBottom={"2rem"}
            name={"title"}
            value={state.title}
            onChange={(e) => handleOnChange(e)}
          />

          <FormLabel htmlFor="text">Descripción del producto</FormLabel>
          <Textarea
            marginBottom={"2rem"}
            name={"description"}
            value={state.description}
            onChange={(e) => handleOnChange(e)}
          />
          <FormLabel htmlFor="text">Precio del producto</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children="$"
            />
            <Input
              name={"price"}
              value={state.price}
              onChange={(e) => handleOnChange(e)}
              placeholder="Ingresa el precio en pesos mexicanos"
              marginBottom={"2rem"}
              width={"200px"}
            />
          </InputGroup>
        </GridItem>
      </Grid>
      <Flex
        w={"100%"}
        height={"30px"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      >
        <ButtonComponent href={"/"} size="md">
          Cancelar
        </ButtonComponent>
        <Button
          colorScheme="purple"
          marginLeft={"1rem"}
          onClick={() => handleUpdate()}
          size="md"
        >
          Actualizar producto
        </Button>
      </Flex>
    </FormControl>
  );
};

export default FormEditProduct;
