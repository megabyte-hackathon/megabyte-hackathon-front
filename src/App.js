import Start from "./routes/Start";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />}></Route>
      </Routes>
    </div>
  );
}

export default App;
