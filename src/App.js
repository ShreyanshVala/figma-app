import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signin } from "./Components/Signin";
import { Signupp } from "./Components/Signupp";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />}></Route>
          <Route path="/signupp" element={<Signupp />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
