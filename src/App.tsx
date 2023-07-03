import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import IntroductionSection from "./components/IntroductionSection";
import ContactUsSection from "./components/ContactUsSection";
import About from "./components/AboutUsSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav" className="sticky-nav">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <IntroductionSection />
        <About />
        <Features />
        <ContactUsSection />
      </GridItem>
      <Footer />
    </Grid>
  );
}

export default App;
