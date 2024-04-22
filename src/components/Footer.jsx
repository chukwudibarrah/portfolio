import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { trackLinkClick } from "../utils/Analytics";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  // Track GA4 clicks

  const handleLinkClick = () => {
    trackLinkClick("Footer links clicked");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer className="min-h-screen font-poppins w-screen overscroll-none overflow-hidden grid content-center items-center bg-black opacity-85 pt-32">
      <p className="fixed text-[200px] leading-[150px] md:text-[400px] md:leading-[230px] opacity-5 text-white font-extrabold">
        contact
        <br />
        me
      </p>

      <div className="overflow-hidden font-outfit lg:w-7/12 py-10 tracking-wide">
        <motion.h2
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-300 md:text-2xl text-xl md:px-32 px-11 font-extralight leading-loose"
        >
          Ready to start creating an outstanding web presence? Let&apos;s discuss
          your amazing ideas.
          <br />
          <br />
          <span className="md:text-6xl text-5xl uppercase font-outfit font-extrabold">
            Send me an email at the address below or feel free to use{"  "}
          </span>
          <span className="group text-gray-300 transition-all duration-300 ease-in-out">
            <span
              className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out z-40 hover:text-sienna md:text-6xl text-5xl uppercase font-outfit font-extrabold hover:cursor-pointer"
              onClick={openModal}
            >
              this contact form.
            </span>
          </span>
        </motion.h2>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} />

      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.75, duration: 0.75 }}
        className="text-gray-300 flex flex-col md:flex-row my-20 md:px-32 px-11"
      >
        <div className="lg:mr-56 md:mb-24 mb-14 tracking-wide">
          <h3 className="flex items-center uppercase text-xl font-outfit font-bold">
            <span className="h-5 w-5 animate-ping flex rounded-full bg-gray-300 opacity-75"></span>
            <span>
              <hr className="h-0.5 w-14 my-8 ml-7 mr-4 bg-gray-300 border-0 dark:bg-gray-300"></hr>
            </span>
            Location
          </h3>
          <p className="font-outfit font-extralight text-xl">
            Sheffield, South Yorkshire, England
          </p>
        </div>
        <div className="lg:mr-56 md:mb-24 mb-14">
          <h3 className="flex items-center uppercase text-xl font-outfit font-bold">
            <span className="h-5 w-5 animate-ping flex rounded-full bg-gray-300 opacity-75"></span>
            <span>
              <hr className="h-0.5 w-14 my-8 ml-7 mr-4 bg-gray-300 border-0 dark:bg-gray-300"></hr>
            </span>
            Email
          </h3>
          <a
            href="mailto:ndeewo@chukwudibarrah.com"
            id="animate"
            className="font-outfit font-extralight text-xl select-none hover:text-sienna"
            onClick={handleLinkClick}
          >
            ndeewo@chukwudibarrah.com
          </a>
        </div>
      </motion.div>

      <div className="flex flex-col md:px-32 px-11 md:flex-row opacity-100 text-gray-300 font-outfit font-extralight tracking-wider z-20">
        <div className="text-gray-300">
          <NavLink
            to="https://github.com/chukwudibarrah/portfolio"
            id="animate"
            className="z-40 hover:text-sienna leading-loose my-4"
            onClick={handleLinkClick}
          >
            See site source code
          </NavLink>
        </div>
        <div className="text-gray-300">
          <NavLink
            to="https://github.com/chukwudibarrah"
            id="animate"
            className="z-40 hover:text-sienna leading-loose my-4 md:mx-20"
            onClick={handleLinkClick}
          >
            My GitHub
          </NavLink>
        </div>
        <div className="text-gray-300">
          <p className="leading-loose mb-20">Chukwudi Barrah - 2027</p>
        </div>
      </div>
    </footer>
  );
}
