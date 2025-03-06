import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Afterscandata from "./components/Afterscandata";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Afterscandata />} />
      </Routes>
    </div>
  );
}
