import { NavLink } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="mx-8 my-8 mb-18">
      <ul className="flex items-stretch justify-center">
        <li className="flex-1 ">Shop</li>
        <li className="flex-1 text-center ">
          <NavLink to={"/"}>
            <h1>HEAS</h1>
          </NavLink>
        </li>
        <li className="flex-1 ">
          <Navbar />
        </li>
      </ul>
    </div>
  );
}
export default Header;
