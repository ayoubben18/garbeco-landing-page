import "../components/garbEcocard.css";
import logo from "../assets/logo.png";
import { Image, Progress, Stack, Text, Box } from "@chakra-ui/react";
import SocialMedia from "./socialMedia";
const GarbEcocard = () => {
  return (
    <div className="garbcard">
      <div className="first-content">
        <Image src={logo} />
      </div>
      <div className="second-content">
        <SocialMedia />
      </div>
    </div>
  );
};

export default GarbEcocard;
