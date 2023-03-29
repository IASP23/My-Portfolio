import "./App.css";
import { CardHome } from "./components/card/card";
import { NavbarVertical } from "./components/navBar/navbarVertical";
function App() {
  return (
    <div className="App">
      <NavbarVertical />
      <div className="container p-4">
        <CardHome />
      </div>
    </div>
  );
}

export default App;
