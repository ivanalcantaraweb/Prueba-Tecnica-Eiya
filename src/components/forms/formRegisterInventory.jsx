import { Grid, GridItem, Flex, FormControl, FormLabel, NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Heading, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateInventory } from "../../features/products/productsSlice";
import ButtonComponent from "../button/button";
import { COLORS } from "../../utils/colors";
import AlertDialogChanges from "../alertDialog/alertDialogChanges";
import { useDisclosure } from "@chakra-ui/react";

const FormRegisterInventory = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const productsState = useSelector((state) => state.products);
  const [state, setState] = useState({
    id: undefined,
    title: "",
    countInventory: 0,
    image: undefined,
  });
  const [previousCount, setPreviousCount] = useState()

  useEffect(() => {
    const data = productsState.find((product) => product.id == params.idProduct) /* eslint eqeqeq: 0 */
    if (params && data) {
      setState(data);
      setPreviousCount(data.countInventory)
    } else {
      navigate("/");
    }
  }, [params, productsState, navigate]);

  const onChangeInventory = (event, prop) => {
    setState({
      ...state,
      [prop]: event,
    });
  };

  const handleUpdate = () => {
    dispatch(updateInventory(state));
    navigate("/");
  };

  const handleOpenDialog = () => {
    onOpen();
  }


  return (<>
    <FormControl bg={COLORS.white} padding={"2rem"} borderRadius={"8px"}>
      <Grid h="100%" templateRows="1fr" templateColumns="1fr 1fr" gap={"1rem"} display={{base: 'block', sm: 'grid'}}>
        <GridItem padding={"1rem"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            padding={"1rem"}
          >
            <Image
               height={"400px"}
               width={"400px"}
               objectFit={"contain"}
               borderRadius={"8px"}
               src={state.image}
               mixBlendMode={"multiply"}
            ></Image>
          </Flex>
        </GridItem>
        <GridItem padding={"1rem"}>
        <FormLabel htmlFor="text">ID del producto</FormLabel>
          <Heading size={"md"} marginBottom={"2rem"}>
            {state && state.id}
          </Heading>
          <FormLabel htmlFor="text">Nombre del producto</FormLabel>
          <Heading size={"md"} marginBottom={"2rem"}>
            {state && state.title}
          </Heading>
        
          <FormLabel htmlFor="text">Inventario</FormLabel>
          <NumberInput
            size="md"
            maxW={24}
            value={state && state.countInventory}
            min={0}
            name="countInventory"
            onChange={(event) => onChangeInventory(event, "countInventory")}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
              onClick={() => handleOpenDialog()}
              size="md"
            >
              Actualizar inventario
            </Button>
          </Flex>
    </FormControl>
    <AlertDialogChanges  
     isOpen={isOpen}
     onClose={onClose}
     updateElement={handleUpdate}
     beforeInventory={parseInt(previousCount)}
     afterInventory={parseInt(state.countInventory)}
     type={1} />
    </>
  );
};

export default FormRegisterInventory;
