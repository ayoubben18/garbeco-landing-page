import {
  Box,
  Button,
  Text,
  HStack,
  Input,
  Textarea,
  Image,
  Stack,
} from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import collab from "../assets/people-collaborating-online.png";
const ContactUsSection = () => {
  return (
    <Box id="contact">
      <HStack>
        <Stack marginLeft={20} marginBottom={60}>
          <Text fontSize="5xl" fontWeight="bold" mb={4}>
            Contact Us
          </Text>
          <Box maxWidth="400px">
            <Input placeholder="Name" size="lg" mb={4} />
            <Input placeholder="Email" size="lg" mb={4} />
            <Textarea
              placeholder="Message"
              size="lg"
              resize="vertical"
              mb={4}
            />
            <HStack spacing={6}>
              <Button colorScheme="teal" variant="outline" size="md">
                Send Message
              </Button>
              <Button
                rightIcon={<MdCall />}
                colorScheme="blue"
                variant="outline"
              >
                Call us
              </Button>
            </HStack>
          </Box>
        </Stack>
        <Box boxSize={800} marginLeft={100}>
          <Image src={collab} />
        </Box>
      </HStack>
    </Box>
  );
};

export default ContactUsSection;
