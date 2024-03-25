import logo from "./logo.svg";
import "./App.css";
import ElementTransfer from "./components/ElementTransfer";
import SplitBox from "./components/SplitBox";
import List from "./components/NestedList/List";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import HitGame from "./components/HitGame";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="element-transfer" element={<ElementTransfer />} />
        <Route path="list" element={<List />} />
        <Route path="hit-game" element={<HitGame />}/>
      </Routes>
      </BrowserRouter>
      {/* <HitGame /> */}
      {/* <SplitBox /> */}
    </div>
  );
}

export default App;
