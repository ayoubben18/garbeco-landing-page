import { Box } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <Box bgColor="black" position="relative" paddingTop={60}>
      <CiLocationOn color="white" />
    </Box>
  );
};

export default Footer;
