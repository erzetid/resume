import {
  Flex,
  IconButton,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      {isNotSmallScreen ? (
        <Flex w={"100%"} justify={"center"}>
          <IconButton
            aria-label="toggle-icon"
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            isRound
          />
        </Flex>
      ) : null}
      <Header />
      <Flex>
        <IconButton
          aria-label="git-icon"
          icon={<FaGithub />}
          onClick={() => window.open("https://github.com/erzetid")}
        />
        <IconButton
          ml={2}
          aria-label="google-icon"
          icon={<FaEnvelope />}
          onClick={() => window.open("mailto:fahrizalm14@gmail.com")}
        />
        <IconButton
          ml={2}
          aria-label="whatsapp-icon"
          icon={<FaWhatsapp />}
          onClick={() =>
            window.open("https://api.whatsapp.com/send?phone=62816257921")
          }
        />
        <IconButton
          ml={2}
          aria-label="download-icon"
          icon={<FaDownload />}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQIqo1ASSALqRgAAAYD9J8XhQR62XG7pXWDAEtnoAjWrBU9mfZF34-gufQz_kyjm-0iEL5gE4sAeMwJ_y-aDSOGfmHhvxyHdSrMr6q0QwsqSgaIJkLe5A5CNfmdfubMBm2ZB5XxrIwwBhdo-C3Otgv2HNbK7Zo9ybZvoKgA8M8br7J5oBnm62hikcoreQF2YEnO1IEVbX7MFRgihhaPzONG9hfePsxFG40-3xCA82YRXpd7025RFqbjYW9WGcbldvIgHnkqtjbYWKTsnckmAbu1E6ORlky4GKRaMt3CbmQsXKOw8dKdhSruMTQYMVEP9Dqa3r6s9BtjnIjHMKBG_6mLPU1czee1EGlyrjQOQj3MGqSELH4bpcQ_Z0wiRwFo_4EvlqTh-SEShldlF977H0Otu5qRJy2Stp083xfaQlJ8iSviFfdKzSisnlgzT1-fwptDg2amcYYaWNto41cZ16omrgXGr8qSWOUPhuvMbL7e3yi2uvSFFuf1Nqq6cCvucu6F3TwFrDUgRyQszbIPtNfllXAy-OmSXUtFp3KVTYH4Q19VeLM6Xx2m-wvwkdtktWly0Gw"
            )
          }
        />
      </Flex>
      <Profile />
      <Footer />
    </VStack>
  );
}

export default App;
