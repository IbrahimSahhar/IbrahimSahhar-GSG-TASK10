import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import PcGames from "./Pages/PS GAMES";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/PcGames" element={<PcGames />}></Route>
      </Routes>
    </div>
  );
}

export default App;
