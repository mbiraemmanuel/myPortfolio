import './App.css';

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-caraousel.component"
import MyTitleMessage from "./components/title-message/title-message.component";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage />
    </div>
  );
}

export default App;
