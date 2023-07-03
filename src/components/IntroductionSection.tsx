import { Box, Button, Text, Image, HStack } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import phone from "../assets/phone.png";
import GarbEcocard from "./garbEcocard";
const IntroductionSection = () => {
  return (
    <Box id="introduction" textAlign="left" marginLeft={20}>
      <HStack justify="space-between">
        <Box>
          <Text fontSize="6xl" fontWeight="bold" mb={4}>
            Welcome to Garbeco!
          </Text>
          <Text marginTop={10} fontSize="lg" mb={6}>
            Gaebeco is lah o3lm
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<FaDownload />}
            marginTop={10}
          >
            Download Now
          </Button>
        </Box>
        <Box marginRight={40} paddingTop={20}>
          <GarbEcocard />
        </Box>
      </HStack>
    </Box>
  );
};

export default IntroductionSection;
