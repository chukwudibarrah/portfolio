import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


export default function About() {
  return (
    <div className="min-h-screen font-poppins w-screen overscroll-none overflow-hidden flex flex-col items-center justify-center bg-charcoal pt-32">
      <p className="fixed -z-0 text-[200px] leading-[150px] md:text-[400px] md:leading-[230px] opacity-5 text-gray-200 font-extrabold">
        about
        <br />
        me
      </p>
      <div className="overflow-hidden font-outfit my-20">
        <motion.h2
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="leading-loose text-gray-300 md:text-2xl text-xl md:px-32 px-11 font-extralight tracking-wide"
        >
          My name is{" "}
          <span className="font-bold text-saffron">Chukwudi Barrah</span>
          .
          <br />
          <br />
          Amateur photographer, avid hiker, tech enthusiast and eternal student, passionate about building, creating and problem-solving.
          <br />
          <br />Doing less and doing it better. I am
          a web developer and{" "}
          <span className="group text-gray-300 transition-all duration-300 ease-in-out">
          <span className="">
            <NavLink
            to="/portfolio/projects"
            className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out font-bold hover:text-sienna"
            >
              this is what I do.
              </NavLink>
          </span>
          </span>
        </motion.h2>
      </div>
    </div>
  );
}
