import { Image } from "@chakra-ui/react";
import LogoEiya from "../../media/images/logoEiya.png";

const Logo = () => {
  return <Image objectFit="cover" maxW={"60%"} alt="logo" src={LogoEiya} />;
};
export default Logo;
