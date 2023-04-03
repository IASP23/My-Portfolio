import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CardHome } from "./components/card/card";
import { Sidebar } from "./components/sidebar/sidebar";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";
function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<CardHome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
