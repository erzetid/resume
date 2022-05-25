import { Flex, Stack, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack>
      <Flex direction={"column"} m={4}>
        <Heading color={"gray.400"} fontSize={"1xl"}>
          Copyright @ {new Date().getFullYear()}
        </Heading>
      </Flex>
    </Stack>
  );
};

export default Footer;
