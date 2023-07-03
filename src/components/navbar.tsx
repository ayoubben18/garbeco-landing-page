import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  useColorMode,
  Image,
  HStack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import ShadowButton from "./shadowbutton";
import Signup from "./signup";
import logo from "../assets/logo.png";
const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg={colorMode === "dark" ? "gray.800" : "white"}
      boxShadow="md"
    >
      <Stack justify="space-between" direction="row" spacing={10}>
        <Image src={logo} boxSize="100px" marginLeft={5} />
        {/* Introduction button */}
        <HStack paddingRight={20} marginLeft={230}>
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => scrollToSection("introduction")}
          >
            Introduction
          </Button>
          {/* Feature buttons */}
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => scrollToSection("educational")}
          >
            Educational
          </Button>
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => scrollToSection("user-space")}
          >
            User Space
          </Button>
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => scrollToSection("e-commerce")}
          >
            E-commerce
          </Button>
          {/* Contact us button */}
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Button>
        </HStack>
        <HStack marginRight={-350}>
          <Box marginTop={1}>
            <ShadowButton />
          </Box>
          <Box marginTop={1} marginLeft={3}>
            <Signup />
          </Box>
        </HStack>
      </Stack>

      {/* Dark mode toggle */}
      <IconButton
        marginRight={5}
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
