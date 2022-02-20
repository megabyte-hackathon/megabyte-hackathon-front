import Start from "./routes/Start";
import { Routes, Route } from "react-router-dom";
import NearCom from "./routes/NearCom";
import styled from "styled-components";

function App() {
  return (
    <Main className="App">
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/nearcompany" element={<NearCom />}></Route>
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
