import { useState } from "react";
import "./App.css";
import { Alert } from "./components";
import {
  AlertContainer,
  AvatarContainer,
  BadgeContainer,
  ButtonContainer,
  CardsContainer,
  ImagesContainer,
  InputContainer,
  ListsContainer,
  ModalContainer,
  NavContainer,
} from "./containers";

function App() {
  const menuOptions = [
    "Avatar",
    "Alerts",
    "Badges",
    "Buttons",
    "Cards",
    "Images",
    "Input",
    "Lists",
    "Navigation",
    "Modal",
  ];
  const [active, setActive] = useState("Avatar");
  const handleOptionClick = (i) => {
    setActive(menuOptions[i]);
  };
  return (
    <div className="App">
      <h1 style={{ marginBottom: "0" }}>RComponents</h1>
      <h6 style={{ marginTop: "16px" }}>A reusable react component library.</h6>
      <div className="App__menuContainersWrapper">
        {menuOptions.map((option, index) => (
          <h4 onClick={() => handleOptionClick(index)} className={active === option ? 'App__activeOptionBtn App__optionBtn' : 'App__optionBtn'}>{option}</h4>
        ))}
      </div>
      <div className="App__componentsWrapper">
        {active === "Avatar" && <AvatarContainer />}
        {active === "Alerts" && <AlertContainer />}
        {active === "Badges" && <BadgeContainer />}
        {active === "Buttons" && <ButtonContainer />}
        {active === "Cards" && <CardsContainer />}
        {active === "Images" && <ImagesContainer />}
        {active === "Input" && <InputContainer />}
        {active === "Lists" && <ListsContainer />}
        {active === "Navigation" && <NavContainer />}
        {active === "Modal" && <ModalContainer />}
      </div>
    </div>
  );
}

export default App;
