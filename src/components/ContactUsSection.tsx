import { Box, Button, Text, HStack, Input, Textarea } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
const ContactUsSection = () => {
  return (
    <Box id="contact" mt={12} marginLeft={50} marginBottom={50}>
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Contact Us
      </Text>
      <Box maxWidth="400px">
        <Input placeholder="Name" mb={4} />
        <Input placeholder="Email" mb={4} />
        <Textarea placeholder="Message" size="lg" resize="vertical" mb={4} />
        <HStack spacing={6}>
          <Button colorScheme="teal" variant="outline" size="md">
            Send Message
          </Button>
          <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
            Call us
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
