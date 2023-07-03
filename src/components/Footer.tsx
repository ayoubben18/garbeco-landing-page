import {
  Box,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import mapIcon from "../assets/map-pin.svg";
const Footer = () => {
  const members = [
    "Ayoub Bensalah",
    "Mohammed Sbihi",
    "Abdelah Tahri",
    "Aya Aboubi",
    "Oumayma Bentahar",
    "Wli b9a blastou lkouzina",
  ];
  return (
    <Box bgColor="black" position="relative" paddingBottom={15}>
      <HStack
        paddingLeft={20}
        spacing={40}
        alignItems="flex-start"
        marginTop={5}
      >
        <Stack spacing={5}>
          <HStack>
            <Image src={mapIcon} boxSize={7} marginTop={2} />
            <Text fontFamily="body" marginTop={2} fontSize={35} color="white">
              Location
            </Text>
          </HStack>
          <Text fontFamily="body" marginTop={2} fontSize={17} color="white">
            Ecole Nationale des Sciences Appliquées,
            <br />
            <br /> Avenue My Abdallah Km 5 Route d'Imouzzer,
            <br />
            <br /> Fès BP 72.
          </Text>
        </Stack>
        <Stack spacing={5}>
          <Text fontFamily="body" marginTop={2} fontSize={35} color="white">
            Team Members
          </Text>
          <UnorderedList spacing={4}>
            {members.map((member) => (
              <ListItem fontFamily="body" color="white">
                {member}
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
        <Stack spacing={5}>
          <Text fontFamily="body" marginTop={2} fontSize={35} color="white">
            ENSAF
          </Text>
          <Text fontFamily="body" marginTop={2} fontSize={17} color="white">
            L'ENSA de Fès, composante de
            <br /> l’Université Sidi Mohamed Ben Abdellah,
            <br />
            est une école d’ingénieurs de
            <br /> l'enseignement supérieur publique
            <br />
            créée en 2005,
            <br /> assurant une formation des ingénieurs
            <br /> d’état avec un cursus de Bac+5.
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
};

export default Footer;
