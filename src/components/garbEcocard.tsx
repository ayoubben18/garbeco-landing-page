import "../components/garbEcocard.css";
import logo from "../assets/logo.png";
import { Image } from "@chakra-ui/react";
import home from "../assets/home.jpg";
const GarbEcocard = () => {
  return (
    <div className="card">
      <div className="first-content">
        <Image src={logo} />
      </div>
      <div className="second-content">
        <Image
          src={home}
          boxSize="100%"
          objectFit="cover"
          borderRadius="14px"
        />
      </div>
    </div>
  );
};

export default GarbEcocard;
