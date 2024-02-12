import "./App.css";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Toggle from "./Toggle/Toggle";
import Work from "./Work/Work";
import Navbar from "./components Navbar/Navbar";
import Intro from "./intro/Intro";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{background: darkMode? 'black' : '',
    color: darkMode? 'white': ''}}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <Toggle/>
    </div>
  );
}

export default App;
