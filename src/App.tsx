import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import IntroductionSection from "./components/IntroductionSection";
import EducationalSection from "./components/AboutUsSection";
import ECommerceSection from "./components/ECommerceSection";
import ContactUsSection from "./components/ContactUsSection";
import UserSpaceSection from "./components/UserSpaceSection";
import About from "./components/AboutUsSection";

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
        <About />
        <ContactUsSection />
      </GridItem>
    </Grid>
  );
}

export default App;
