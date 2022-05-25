import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

const CardIcon = ({
  isNotSmallScreen,
  icon,
  title,
}: {
  isNotSmallScreen: boolean;
  icon: IconType;
  title: string;
}) => {
  return (
    <Flex
      rounded={"xl"}
      direction={"column"}
      mt={4}
      ml={2}
      bg={"blue.400"}
      h={"30vh"}
      w={isNotSmallScreen ? "12vw" : "60vw"}
      justify={"flex-end"}
    >
      <Icon color={"white"} as={icon} p={4} w={24} h={24} />
      <Text p={4} fontSize={"xl"} color={"white"} fontWeight={"semibold"}>
        {title}
      </Text>
    </Flex>
  );
};

export default CardIcon;
