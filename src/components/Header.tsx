import { useState } from "react";
import { NavLink } from "react-router";
import Navbar from "./Navbar";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/90   backdrop-blur px-6 py-4 font-light">
      {/* 3-column layout keeps logo perfectly centered */}
      <div className="grid grid-cols-3 items-center">
        {/* Left: SHOP (always visible) */}
        <div className="justify-self-start text-[12px]">
          {/* If SHOP should be a link, wrap in NavLink */}
          <NavLink to="/shop" className="hover:underline underline-offset-4">
            SHOP
          </NavLink>
        </div>

        {/* Center: Logo */}
        <div className="justify-self-center">
          <NavLink to="/" aria-label="Go to home">
            <img className="h-[30px]" src="/Logo/HEAS-logo.png" alt="HEAS" />
          </NavLink>
        </div>

        {/* Right: burger on mobile, full navbar on desktop */}
        <div className="justify-self-end">
          {/* Desktop navbar */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="md:hidden text-2xl leading-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden mt-4 border-t border-black/10 pt-4">
          <Navbar mobile onClickLink={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}

export default Header;
