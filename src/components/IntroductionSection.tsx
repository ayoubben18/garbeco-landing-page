import { Box, Button, Text, Image, HStack } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import phone from "../assets/phone.png";
import GarbEcocard from "./garbEcocard";
import PlayStore from "./playStore";
const IntroductionSection = () => {
  return (
    <Box id="introduction" textAlign="left" marginLeft={20} paddingBottom={50}>
      <HStack justify="space-between">
        <Box>
          <Text fontSize="6xl" fontWeight="bold" mb={4}>
            Welcome to Garbeco!
          </Text>
          <Text marginTop={10} fontSize="lg" mb={6}>
            Gaebeco is project created by some engineering students wich
            consists of an app and a ...
          </Text>
          <HStack>
            <Button
              colorScheme="teal"
              variant="outline"
              size="lg"
              leftIcon={<FaDownload />}
              marginTop={10}
            >
              Download Now
            </Button>
            <Box marginTop={10} marginLeft={3}>
              <PlayStore />
            </Box>
          </HStack>
        </Box>
        <Box marginRight={40} paddingTop={20}>
          <GarbEcocard />
        </Box>
      </HStack>
    </Box>
  );
};

export default IntroductionSection;
