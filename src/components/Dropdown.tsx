import { useState } from "react";
import { NavLink } from "react-router";

function Dropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className="cursor-pointer mb-2">Projects</p>
      {isDropdownVisible && (
        <ul className="absolute flex flex-col mb-2 gap-2 ">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
        </ul>
      )}
    </li>
  );
}
export default Dropdown;
