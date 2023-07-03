import { Box, Button, Text, Image, HStack } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import phone from "../assets/phone.png";
const IntroductionSection = () => {
  return (
    <Box id="introduction" textAlign="left" marginLeft={20}>
      <HStack justify="space-between">
        <Box>
          <Text fontSize="6xl" fontWeight="bold" mb={4}>
            Welcome to Garbeco!
          </Text>
          <Text fontSize="lg" mb={6}>
            Gaebeco is lah o3lm
          </Text>
          <Button colorScheme="teal" size="lg" leftIcon={<FaDownload />}>
            Download Now
          </Button>
        </Box>
        <Image
          src={phone}
          alt="Garbeco App"
          mt={8}
          boxSize={500}
          marginRight={20}
        />
      </HStack>
    </Box>
  );
};

export default IntroductionSection;
