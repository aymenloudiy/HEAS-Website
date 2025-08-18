import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContactUs() {
  return (
    <div className="flex gap-8 justify-center">
      <div>
        <img
          className="max-h-[650px]"
          src="/assets/contact-picture.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col grow max-w-xl">
        <h2 className="font-bold mb-8 text-2xl">Contact Us</h2>
        <form action="" className="flex flex-col gap-4 my-8">
          <label htmlFor="">Full Name</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
          />
          <label htmlFor="">E-mail</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="email"
          />
          <label htmlFor="">Message</label>
          <textarea
            rows={12}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <button
            className=" self-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  px-8 p-2.5 mt-4"
            type="submit"
          >
            Contact Us
          </button>
        </form>
        <div>
          <ul className="flex gap-6 justify-center">
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
    </div>
  );
}
export default ContactUs;
