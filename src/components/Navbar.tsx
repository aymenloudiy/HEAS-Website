import { NavLink } from "react-router";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav className="bg-white">
      <ul className="flex gap-8 items-center">
        <li>
          <NavLink to="/services" className="">
            Services
          </NavLink>
        </li>
        <Dropdown />
        <li>
          <NavLink to="/news" className="">
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
