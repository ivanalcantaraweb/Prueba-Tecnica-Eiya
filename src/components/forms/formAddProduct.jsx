import { Grid, GridItem, Flex, Box, FormControl, FormLabel, Input, Textarea, InputGroup, InputLeftAddon, InputLeftElement, Button, Image } from "@chakra-ui/react";
import ButtonComponent from "../button/button";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/products/productsSlice";
import EmptyImage from "../../media/emptyStates/emptyImage.png";
import { LinkIcon } from "@chakra-ui/icons";
import { COLORS } from "../../utils/colors"; 
import AlertDialogChanges from "../alertDialog/alertDialogChanges";
import { useDisclosure } from "@chakra-ui/react";

const FormAddProduct = () => {
  const [state, setState] = useState({
    id: undefined,
    title: "",
    description: "",
    price: undefined,
    countInventory: 0,
    image: undefined,
  });
  const [previewImage, setPreviewImage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsState = useSelector((state) => state.products);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleOpenDialog = () => {
    onOpen();
  }

  const handleOnSubmit = () => {
    dispatch(
      addProduct({
        ...state,
        id: productsState.length + 1,
      })
    );
    navigate("/");
  };

  const handlePreviewImage = () => setPreviewImage(true);

  return (
    <>
    <FormControl bg={COLORS.white} padding={"2rem"} borderRadius={"8px"}>
      <Grid h="100%" templateRows="1fr" templateColumns="1fr 1fr" gap={"1rem"}>
        <GridItem padding={"1rem"}>
          <FormLabel htmlFor="text">Nombre del producto</FormLabel>
          <Input
            type="text"
            marginBottom={"2rem"}
            name={"title"}
            onChange={(e) => handleOnChange(e)}
          />
          <FormLabel htmlFor="text">Descripción del producto</FormLabel>
          <Textarea
            marginBottom={"2rem"}
            name={"description"}
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
              onChange={(e) => handleOnChange(e)}
              placeholder="Ingresa el precio en pesos mexicanos"
              marginBottom={"2rem"}
              width={"200px"}
            />
          </InputGroup>
        </GridItem>
        <GridItem>
          <Flex
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            h="100%"
          >
            <Box
              height={"350px"}
              width={"100%"}
              bg={"#fcfcfc"}
              border={"1px solid rgb(226, 232, 240)"}
              borderRadius={"8px"}
            >
              <Flex
                justifyContent={"center"}
                gap={"1rem"}
                flexDirection={"column"}
                alignItems={"center"}
                h={"100%"}
              >
                {previewImage ? (
                  <Image
                    maxWidth={"100%"}
                    minWidth={"100%"}
                    src={state.image}
                    borderRadius={"8px"}
                  />
                ) : (
                  <Fragment>
                    <Image
                      maxWidth={"200px"}
                      minWidth={"100px"}
                      src={EmptyImage}
                    />
                    <InputGroup width={"70%"} size="sm">
                      <InputLeftAddon children={<LinkIcon />} />
                      <Input
                        placeholder="Ingresa una URL"
                        name="image"
                        onChange={(e) => handleOnChange(e)}
                      />
                    </InputGroup>
                    <Button
                      colorScheme={"yellow"}
                      onClick={() => handlePreviewImage()}
                    >
                      Previsualizar
                    </Button>
                  </Fragment>
                )}
              </Flex>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Flex
        w={"100%"}
        height={"100px"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      >
        <ButtonComponent href={"/"} size="md">
          Cancelar
        </ButtonComponent>
        <Button
          colorScheme="purple"
          marginLeft={"1rem"}
          onClick={() => handleOpenDialog()}
        >
          Guardar producto
        </Button>
      </Flex>
    </FormControl>
    <AlertDialogChanges  
        isOpen={isOpen}
        onClose={onClose}
        updateElement={handleOnSubmit}
        type={3} />
    </>
  );
};

export default FormAddProduct;
