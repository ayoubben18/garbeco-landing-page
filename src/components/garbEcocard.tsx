import "../components/garbEcocard.css";
import logo from "../assets/logo.png";
import { Image, Progress, Stack, Text, Box } from "@chakra-ui/react";
const GarbEcocard = () => {
  return (
    <div className="garbcard">
      <div className="first-content">
        <Image src={logo} />
      </div>
      <div className="second-content">
        <Stack spacing={4}>
          <Box borderRadius={30} bgColor="rgba(255, 255, 255, 0.5)">
            <Text
              marginLeft={75}
              color="yellow.200"
              fontSize="5xl"
              fontWeight="bold"
              marginBottom={-5}
            >
              240
            </Text>
            <Text
              marginLeft={6}
              color="yellow.200"
              fontSize="5xl"
              fontWeight="bold"
              marginBottom={2}
            >
              POINTS
            </Text>
          </Box>
          <Progress
            borderRadius={10}
            hasStripe
            colorScheme="cyan"
            width={230}
            size="lg"
            value={44}
          />
          <Progress
            borderRadius={10}
            hasStripe
            colorScheme="pink"
            width={230}
            size="lg"
            value={20}
          />
          <Progress
            borderRadius={10}
            hasStripe
            colorScheme="blue"
            width={230}
            size="lg"
            value={80}
            marginBottom={8}
          />
        </Stack>
      </div>
    </div>
  );
};

export default GarbEcocard;
