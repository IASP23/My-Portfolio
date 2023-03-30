import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CardHome } from "./components/card/card";
import { Sidebar } from "./components/sidebar/sidebar";
function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<CardHome />} />
          <Route path="/dashboard" element={<CardHome />} />
          <Route path="/about" element={<CardHome />} />
          <Route path="/comment" element={<CardHome />} />
          <Route path="/analytics" element={<CardHome />} />
          <Route path="/product" element={<CardHome />} />
          <Route path="/pdf" element={<CardHome />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
