import { Outlet, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const videos = [
    "/videos/Home_Video_1.mp4",
    "/videos/Home_Video_2.mp4",
    "/videos/Home_Video_3.mp4",
    "/videos/Home_Video_4.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEnded = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < videos.length ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {isHome ? (
          <>
            <section className="relative min-h-screen">
              <video
                key={currentIndex}
                autoPlay
                muted
                playsInline
                onEnded={handleEnded}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={videos[currentIndex]} type="video/mp4" />
              </video>

              <div className="relative z-10"></div>
            </section>

            <Outlet />
          </>
        ) : (
          <div className="relative grow mt-32">
            <Outlet />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
