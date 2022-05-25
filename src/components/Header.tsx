import {
  Stack,
  useColorMode,
  useMediaQuery,
  Flex,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Stack>
      <Flex
        direction={isNotSmallScreen ? "row" : "column"}
        px={isNotSmallScreen ? "32" : "0"}
        py={isNotSmallScreen ? "4" : "0"}
        alignSelf={"flex-start"}
      >
        <Box
          mt={isNotSmallScreen ? "0" : 16}
          textAlign={isNotSmallScreen ? "end" : "start"}
        >
          <Text fontSize={"4xl"} fontWeight={"semibold"}>
            Hai, saya
          </Text>
          <Text
            fontSize={"5xl"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500, purple.500)"}
            bgClip={"text"}
          >
            Muhammad Andri Fahrizal
          </Text>
          <Text fontSize={"1xl"} color={isDark ? "gray.200" : "gray.500"}>
            Mobile/Web Developer | Programmer
          </Text>
        </Box>
        <Image
          mt={isNotSmallScreen ? "0" : 12}
          mb={isNotSmallScreen ? "0" : 4}
          ml={isNotSmallScreen ? 12 : "auto"}
          mr={"auto"}
          alignSelf={"center"}
          src={
            "https://media-exp1.licdn.com/dms/image/C5603AQHUZlYD3QOQgQ/profile-displayphoto-shrink_200_200/0/1652149341308?e=1658966400&v=beta&t=ILDtboNnZmrGG57pu6Mq5kS0Nqo4NG_ICfv9VNftMPs"
          }
          boxSize={isNotSmallScreen ? "150px" : "80%"}
          boxShadow="lg"
          borderRadius={"100%"}
        />
      </Flex>
    </Stack>
  );
};

export default Header;
