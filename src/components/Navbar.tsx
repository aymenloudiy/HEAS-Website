import { NavLink } from "react-router";
// import Dropdown from "./Dropdown";

type NavbarProps = {
  mobile?: boolean;
  onClickLink?: () => void;
};

function Navbar({ mobile = false, onClickLink }: NavbarProps) {
  const linkCls = "text-[12px] block py-2 md:py-0";

  return (
    <nav>
      <ul
        className={mobile ? "flex flex-col gap-2" : "flex items-center gap-8"}
      >
        <li>
          <NavLink to="/services" className={linkCls} onClick={onClickLink}>
            SERVICES
          </NavLink>
        </li>

        {/* Keep Dropdown as you had it; ensure it behaves in mobile too */}
        {/* <Dropdown /> */}

        <li>
          <NavLink to="/projects" className={linkCls} onClick={onClickLink}>
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className={linkCls} onClick={onClickLink}>
            BLOGS
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={linkCls} onClick={onClickLink}>
            NEWS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkCls} onClick={onClickLink}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
