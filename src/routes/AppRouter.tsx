import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
