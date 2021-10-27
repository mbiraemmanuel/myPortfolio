import './App.css';

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import Fade from "react-reveal/Fade"
import Container from "react-bootstrap/Container";
import About from "./pages/about/about.component";
import { Parallax, } from 'react-parallax';
import Back from "./assets/background.jpg";
import contactbackground from "./assets/contactBackground.jpg"
import Skills from "./pages/skills/skills.component";
import Projects from './components/projects-timeline/projects.component';
import Experience from './pages/experience/experience.component';
import Contact from './components/contact-me/contact.component';
import "animate.css/animate.min.css";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Aos from 'aos';

function App() {

  useEffect(() =>{
    Aos.init({
      offset: 200,
      duration: 2500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className="App" style={{ position: "relative" }}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>      
      <MyNavbar />
      <MyTitleMessage />
      <div>
        <div data-aos="flip-left" data-aos-offset="200">
            <Container className="container-box rounds">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
        </div>
        <div data-aos="fade-left">
          <Skills />
        </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>   
        <div data-aos="fade-right">
          <Projects />
        </div>
        
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>  
        <div data-aos="fade-down-left">
          <Experience/>
        </div>
        <div data-aos="slide-right">
            <Contact/>
        </div>
        

      </div>

    </div>
  );
}

export default App;
