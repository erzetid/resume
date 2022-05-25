import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { SiAndroid, SiReact, SiExpress, SiAmazonaws } from "react-icons/si";
import CardIcon from "./card-icon";

const Profile = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      direction={isNotSmallScreen ? "row" : "column"}
      w={"100vw"}
      justify={"center"}
    >
      <Box alignSelf={"center"} px={16} py={16}>
        <Heading fontWeight={"extrabold"} color={"cyan.500"} fontSize={"4xl"}>
          2+
        </Heading>
        <Text fontSize={"2xl"} color={"gray.500"}>
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf={"center"}>
        <Flex direction={isNotSmallScreen ? "row" : "column"}>
          <CardIcon
            title={"Android Apps"}
            icon={SiAndroid}
            isNotSmallScreen={isNotSmallScreen}
          />
          <CardIcon
            title={"ReactJs Apps"}
            icon={SiReact}
            isNotSmallScreen={isNotSmallScreen}
          />
          <CardIcon
            title={"ExpressJs Apps"}
            icon={SiExpress}
            isNotSmallScreen={isNotSmallScreen}
          />
          <CardIcon
            title={"Amazon Web Service"}
            icon={SiAmazonaws}
            isNotSmallScreen={isNotSmallScreen}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
