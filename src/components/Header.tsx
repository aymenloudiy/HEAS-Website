import { NavLink } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white px-8 py-[25px] font-light opacity-[90%]">
      <ul className="flex items-center justify-between">
        <li className="flex-1 text-[12px]">SHOP</li>

        <li className="flex-1 text-center">
          <NavLink to="/">
            <h1 className="text-xl font-semibold flex justify-center">
              <img className="h-[30px]" src="/Logo/HEAS-logo.png" alt="" />
            </h1>
          </NavLink>
        </li>

        <li className="flex-1 flex justify-end">
          <Navbar />
        </li>
      </ul>
    </header>
  );
}
export default Header;
