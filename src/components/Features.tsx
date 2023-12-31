import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import "../components/card.css";
const Features: React.FC = () => {
  return (
    <Box id="features" mt={12} paddingTop={10} paddingBottom={20}>
      <Text
        fontSize="5xl"
        fontWeight="bold"
        mb={4}
        marginLeft={100}
        paddingBottom={10}
      >
        Features
      </Text>
      <HStack spacing={200} marginLeft={100}>
        <div className="card1">User Space</div>
        <div className="card2">Educational Section</div>
        <div className="card3">E-commerce Section</div>
      </HStack>

      {/* Add your content for the e-commerce part */}
    </Box>
  );
};

export default Features;
