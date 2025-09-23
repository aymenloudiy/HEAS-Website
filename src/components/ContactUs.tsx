import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactUs() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: {
    preventDefault: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentTarget: any;
  }) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Post directly to Formspree endpoint
    const res = await fetch("https://formspree.io/f/xovkagbg", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      const json = await res.json().catch(() => ({}));
      setError(json?.errors?.[0]?.message || "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div className="flex gap-8 justify-center">
      <div>
        <img
          className="max-h-[650px]"
          src="/assets/contact-picture.jpg"
          alt="Contact"
        />
      </div>

      <div className="flex flex-col grow max-w-xl">
        <h1 className="font-bold mb-8 text-xl">Contact Us</h1>

        <form onSubmit={onSubmit} className="flex flex-col gap-4 my-8">
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <input
            type="hidden"
            name="_subject"
            value="New message from HEAS website"
          />

          <label className="font-light" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <label className="font-light" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <label className="font-light" htmlFor="message">
            Start chatting with HEAS
          </label>
          <textarea
            id="message"
            name="message"
            rows={12}
            required
            placeholder="Tell us about your project…"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="self-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-8 p-2.5 mt-4"
          >
            {status === "loading" ? "Sending…" : "Contact Us"}
          </button>

          {status === "success" && (
            <p className="text-green-700 text-center">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">{error}</p>
          )}
        </form>

        <div>
          <ul className="flex gap-6 justify-center">
            <li>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/profile.php?id=100094004492469"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/heasinc/"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/heas_inc/"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center text-center m-6">
          <ul className="flex flex-col gap-4">
            <li>
              <p>HEAS INC.</p>
            </li>
            <li>
              <p>Toronto ON Canada</p>
            </li>
            <li>
              <p>+1 819 329 6895</p>
            </li>
            <li>
              <p>General Information: studio@heas.ca</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
