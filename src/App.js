import "./App.css";
import NavBar from "./components/NavBar.js";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Form />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
