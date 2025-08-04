import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="flex justify-between mx-8 my-4">
        <div className="ml-4">HEAS</div>
        <div className="grow ">
          <ul className="flex justify-end gap-16">
            <li>
              <p className="mb-4">Resources</p>
              <ul className="flex flex-col gap-2">
                <li>Projects</li>
                <li>Services</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </li>
            <li>
              <p className="mb-4">Follow Us</p>
              <ul className="flex flex-col gap-2">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
              </ul>
            </li>
            <li>
              <p className="mb-4">Legal</p>
              <ul className="flex flex-col gap-2">
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mx-8 mb-4">
        <small>&copy; 2025 HEAS &trade;. All Rights Reserved.</small>
        <div>
          <ul className="flex gap-6">
            <li className="">
              <FaFacebook />
            </li>
            <li className="">
              <FaXTwitter />
            </li>
            <li className="">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
