import { NavLink } from "react-router";
import Dropdown from "./Dropdown";

function navbar() {
  return (
    <div>
      <nav>
        <ul className="flex gap-12">
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <Dropdown />
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default navbar;
