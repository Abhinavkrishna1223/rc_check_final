import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex items-center bg-sky-300 justify-center w-full ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
