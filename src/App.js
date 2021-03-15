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
} from "./containers";

function App() {
  return (
    <div className="App">
      <h1>React Component Library!</h1>
      <AvatarContainer />
      <AlertContainer />
      <BadgeContainer />
      <ButtonContainer />
      <CardsContainer />
      <ImagesContainer />
      <InputContainer />
    </div>
  );
}

export default App;
