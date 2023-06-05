import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <main
      className="min-w-[375px] min-h-[100vh] max-w-[1440px] font-['Poppins'] 
    bg-['whitesmoke']"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </main>
  );
}

export default App;
