import "./App.css";
import { CardHome } from "./components/card/card";
import { NavbarVertical } from "./components/navBar/navbarVertical";
import Sidebar from "./components/navbarKaren/navbarK";
function App() {
  return (
    <div className="App">
      <NavbarVertical />
      <div className="container p-4">
        <CardHome />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
