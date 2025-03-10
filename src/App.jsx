import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Afterscandata from "./components/Afterscandata";
import Login from "./components/Login";
import Protected from "./components/Protected";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full ">
      <Routes>
        <Route path="/" element={<Protected> <Home /></Protected>} />
        {/* <Route path="/details" element={<Afterscandata />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
