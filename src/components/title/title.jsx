import { Heading } from "@chakra-ui/react";

const Title = ({ children, type }) => {
  const TYPE_TITLE = {
    Title: { as: "h1", size: "xl" },
    Subtitle: { as: "h2", size: "md" },
  };

  return (
    <Heading
      as={TYPE_TITLE[type].as}
      size={TYPE_TITLE[type].size}
      borderBottomColor={"#e2e2e2"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      gap={"1rem"}
    >
      {children}
    </Heading>
  );
};

export default Title;
