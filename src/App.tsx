import { Outlet, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  console.log(location);
  return location.pathname == "/" ? (
    <div>
      <div className="relative">
        <div className="h-fit absolute">
          <video autoPlay loop>
            <source src="/assets/vecteezy_3d-render-animation-scene-living-room-interior-design_5018340.mp4" />
          </video>
        </div>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="relative grow">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative grow mt-32">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
