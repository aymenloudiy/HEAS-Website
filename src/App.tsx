import { Outlet, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {isHome ? (
          <>
            <section className="relative min-h-screen">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/merged.mp4" />
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
