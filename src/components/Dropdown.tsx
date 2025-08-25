import { useState } from "react";
import { NavLink } from "react-router";

function Dropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <p className="cursor-pointer">Profile</p>
      {isDropdownVisible && (
        <ul className="absolute top-full left-0 flex flex-col gap-2 bg-white rounded-md p-2 z-50">
          <li>
            <NavLink to="/about" className="">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="">
              Team
            </NavLink>
          </li>
        </ul>
      )}
    </li>
  );
}
export default Dropdown;
