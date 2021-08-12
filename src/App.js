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
import Skills from "./pages/skills/skills.component";
import Projects from './components/projects-timeline/projects.component';
import Experience from './pages/experience/experience.component';
import Contact from './components/contact-me/contact.component';

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage />

      <div>
        <Parallax
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
        </Parallax>
        <Skills />
        <Projects />
        <Experience/>
        <Contact/>

      </div>

    </div>
  );
}

export default App;
