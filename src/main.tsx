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
import DowntownTorontoResidence from "./pages/Project-1";
import DowntownTorontoResidenceGallery from "./pages/Project1Gallery.tsx";
import BlogsIndex from "./pages/BlogIndex.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import ProjectBeforeAfterArticle from "./pages/ProjectBeforeAfter.tsx";
import NewMembersArticle from "./pages/NewMembers.tsx";
import WhitePaintArticle from "./pages/WhitePaint.tsx";
import LayeringArticle from "./pages/Layering.tsx";
import ChurchStreetResidence from "./pages/Project-2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="projects/downtown-toronto-residence"
            element={<DowntownTorontoResidence />}
          />
          <Route
            path="/projects/church-street-residence"
            element={<ChurchStreetResidence />}
          />
          <Route
            path="projects/downtown-toronto-residence/gallery"
            element={<DowntownTorontoResidenceGallery />}
          />
          <Route path="blogs" element={<BlogsIndex />} />
          <Route path="blogs/:slug" element={<BlogPost />} />
          <Route path="news" element={<News />} />
          <Route
            path="news/layering-materials-like-a-designer"
            element={<LayeringArticle />}
          />
          <Route
            path="news/choosing-the-right-white-paint"
            element={<WhitePaintArticle />}
          />
          <Route path="news/new-team-members" element={<NewMembersArticle />} />
          <Route
            path="news/before-after-toronto-townhome"
            element={<ProjectBeforeAfterArticle />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
