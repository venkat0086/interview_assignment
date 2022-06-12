import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { NewStories } from "./Components/NewStories";
import { BestStories } from "./Components/BestStories";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newstories" element={<NewStories />} />
        <Route path="/topstories" element={<Home />} />
        <Route path="/beststories" element={<BestStories />} />
      </Routes>
    </div>
  );
}

export default App;
