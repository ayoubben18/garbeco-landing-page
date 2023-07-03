import { Box, Text, Slide, SlideFade } from "@chakra-ui/react";
import React from "react";
import CarouselComponent from "./CarouselComponent";

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
      <Text
        fontSize="4xl"
        fontWeight="bold"
        mb={4}
        paddingLeft={7}
        paddingBottom={10}
      >
        About Us
      </Text>
      <Text marginRight={400} paddingLeft={5} paddingBottom={10}>
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
