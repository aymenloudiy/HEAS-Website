import { NavLink } from "react-router";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav className="bg-white">
      <ul className="flex gap-8 items-center">
        <li>
          <NavLink to="/services" className="text-[12px]">
            SERVICES
          </NavLink>
        </li>
        <Dropdown />
        <li>
          <NavLink to="/projects" className="text-[12px]">
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="text-[12px]">
            BLOGS
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className="text-[12px]">
            NEWS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-[12px]">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
