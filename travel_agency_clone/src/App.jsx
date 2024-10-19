import Container from "./Container";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Container>
      <Header />
      <Home />
      <About/>
      <Services/>
      <Pricing/>
      <Gallery/>
      <Footer/>
    </Container>

  );
};

export default App;