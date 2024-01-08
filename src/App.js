import Home from "./pages/Home";
import Company from "./pages/Company";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Company" element={<Company/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
