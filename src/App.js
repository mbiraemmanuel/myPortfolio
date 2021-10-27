import './App.css';

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-caraousel.component"
import MyTitleMessage from "./components/title-message/title-message.component";
import Fade from "react-reveal/Fade"
// import Slide from "react-reveal/Slide";
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
import ScrollAnimation from 'react-animate-on-scroll';
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
      {/* <MyCarousel /> */}
      <MyTitleMessage />

      <div>
        {/* <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={Back}
          bgImageAlt="the dog"
          strength={-200}
        >
          <div>
            <Container className="container-box rounds">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
          <div style={{ height: '200px' }} />
        </Parallax> */}
        {/* <ScrollAnimation animateIn="fadeIn">
        </ScrollAnimation> */}
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
        <Experience/>
        <Parallax 
          blur={{ min: -30, max: 30 }}
          bgImage={contactbackground}
          bgImageAlt="board"
          strength={-200}
        >
          <Container className="container-box round">
            <Contact/>
          </Container>
        </Parallax>
        

      </div>

    </div>
  );
}

export default App;
