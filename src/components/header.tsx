import Navbar from "./Navbar";

function Header() {
  return (
    <div className="mx-8 my-4">
      <ul className="flex justify-center">
        <li className="m-auto ">Shop</li>
        <li className="grow text-center m-auto">
          <h1>HEAS</h1>
        </li>
        <li className="m-auto">
          <Navbar />
        </li>
      </ul>
    </div>
  );
}
export default Header;
