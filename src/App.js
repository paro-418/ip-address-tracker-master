import "./App.css";
import UI from "./components/UI/UI";
import { PositionContextProvider } from "./contexts/data";

function App() {

  return <PositionContextProvider>
    <UI/>
  </PositionContextProvider>
}

export default App;
