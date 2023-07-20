import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Institution from "./components/Institution";
import Pro from "./components/Pro";
import EarnStake from "./components/EarnStake";
import Learn from "./components/Learn";
import Markets from "./components/Markets";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institutions" element={<Institution />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/earnstake" element={<EarnStake />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </>
  )
}

export default App;
