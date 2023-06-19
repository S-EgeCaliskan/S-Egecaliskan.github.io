import { HashRouter, Route, Routes } from "react-router-dom";
import Project from './pages/Project';
import About from "./pages/About";
import Navbar from './pages/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<About />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
