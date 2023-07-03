import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CarouselComponent from "./CarouselComponent";
import SendMessage from "./sendMessage";

const About: React.FC = () => {
  return (
    <Box
      id="about-us"
      mt={12}
      bgColor="black"
      position="relative"
      paddingTop={5}
      paddingBottom={30}
    >
      <Text color="white" fontSize="6xl" fontWeight="bold" paddingLeft={6}>
        About Us
      </Text>
      <Box paddingLeft={2} paddingBottom={4}>
        <SendMessage />
      </Box>
      <Text color="white" marginRight={400} paddingLeft={5} paddingBottom={10}>
        We are a dedicated team of engineering students studying at ENSA Fes in
        Morocco, driven by a passion for innovation and problem-solving.
        Together, we have embarked on an exciting journey to create a
        groundbreaking project that encompasses a new and unique idea.{" "}
      </Text>
      <Box marginLeft={5}>
        <CarouselComponent />
      </Box>
    </Box>
  );
};

export default About;
