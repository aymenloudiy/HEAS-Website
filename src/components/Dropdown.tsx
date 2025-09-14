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
      <a className="cursor-pointer text-[12px]">PROFILE</a>
      {isDropdownVisible && (
        <ul className="absolute top-full left-0 flex flex-col gap-2 bg-white rounded-md p-2 z-50">
          <li>
            <NavLink to="/about" className="text-[12px]">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="text-[12px]">
              TEAM
            </NavLink>
          </li>
        </ul>
      )}
    </li>
  );
}
export default Dropdown;
