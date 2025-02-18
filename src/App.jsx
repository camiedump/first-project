import hero from "./components/Hero";
import About from "./components/about-me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path="/" element={<hero/>}/>
        <Route path="/about-me" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
