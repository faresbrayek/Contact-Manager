import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Details from "./pages/Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
