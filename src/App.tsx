import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import IntroductionSection from "./components/IntroductionSection";
import EducationalSection from "./components/EducationalSection";
import ECommerceSection from "./components/ECommerceSection";
import ContactUsSection from "./components/ContactUsSection";
import UserSpaceSection from "./components/UserSpaceSection";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <IntroductionSection />
        <UserSpaceSection />
        <EducationalSection />
        <ECommerceSection />
        <ContactUsSection />
      </GridItem>
    </Grid>
  );
}

export default App;
