import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Toast from "../features/Toast";

export default function Modal({ isOpen, onClose }) {
  const [buttonLoading, setButtonLoading] = useState(false);

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);

    // call emailjs method to send email

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast("Message sent!");
          setButtonLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          toast("Error sending email. Please try again.");
          e.target.reset();
        }
      );
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpen ? "bg-black opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-500`}
    >
      <Toast />
      <div className="flex items-center justify-center min-h-screen pt-4 text-center">
        <div className="inset-0 bg-black opacity-100 transition-opacity"></div>

        <div className="w-screen max-w-lg">
          <h2 className="px-8 pt-16 mb-4 uppercase text-5xl md:text-6xl text-gray-300 font-extrabold">
            Get in touch
          </h2>

          <form ref={form} onSubmit={handleSubmit} className="">
            <div className="px-8 flex flex-col lg:flex-row justify-evenly my-10">
              <div className="grid my-3 group transition-all duration-300 ease-in-out">
                <label className="text-gray-300 text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  className="border-b-2 bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out outline-none bg-inherit mx-3 text-gray-300"
                />
              </div>
              <div className="grid my-3 group transition-all duration-300 ease-in-out">
                <label className="text-gray-300 text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="border-b-2 bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out outline-none bg-inherit mx-3 text-gray-300"
                />
              </div>
              <div className="grid my-3 group transition-all duration-300 ease-in-out">
                <label className="text-gray-300 text-sm" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="border-b-2 bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out outline-none bg-inherit mx-3 text-gray-300"
                />
              </div>
            </div>
            <div className="grid my-3 group transition-all duration-300 ease-in-out px-10 md:px-0 md:w-full">
              <label className="text-gray-300 text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="resize border-b-2 bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out outline-none bg-inherit text-gray-300"
              />
            </div>
            <div className="my-14">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                id="submit"
                type="submit"
                disabled={buttonLoading && true}
                className="text-sm uppercase rounded-full outline-dashed hover:outline-sienna hover:text-sienna hover:font-extrabold hover:cursor-pointer outline-gray-300 text-gray-300 font-bold py-16 px-11"
              >
                {buttonLoading ? "Sending..." : "Send"}
              </motion.button>
            </div>
          </form>

          <button
            className="text-gray-300 hover:text-sienna mt-16"
            onClick={onClose}
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
