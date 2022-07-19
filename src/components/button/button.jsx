import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ButtonComponent = ({ size, href, color, children }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(href, { replace: true });
  };

  return (
    <Button size={size} display={"flex"} gap={"0.5rem"} colorScheme={color} onClick={() => handleClick()}>
      {children}
    </Button>
  );
};
export default ButtonComponent;
