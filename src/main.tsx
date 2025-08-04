import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import News from "./pages/News.tsx";
import Projects from "./pages/Projects.tsx";
import Services from "./pages/Services.tsx";
import Team from "./pages/Team.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="team" element={<Team />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
