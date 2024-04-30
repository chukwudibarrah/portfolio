import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SEO from "../utils/SEO";

export default function About() {
  return (
    <div className="min-h-screen font-poppins w-screen overscroll-none overflow-hidden flex flex-col items-center justify-center bg-charcoal pt-32">
      <SEO
        title="About - Chukwudi Barrah"
        description="Web editor, developer and copywriter."
        name="Chukwudi Barrah"
        type="page"
      />
      <h1 className="fixed -z-0 text-[200px] leading-[150px] md:text-[400px] md:leading-[230px] opacity-5 text-gray-200/40 font-extrabold">
        about
        <br />
        me
      </h1>
      <div className="overflow-hidden font-outfit my-20 space-y-8">
        <motion.h2
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="md:text-7xl text-5xl font-zilla text-brown md:px-32 px-11 tracking-wide"
        >
          Who&apos;s Chukwudi Barrah?
        </motion.h2>
        <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="leading-loose text-gray-300 md:text-2xl text-xl md:px-32 px-11 font-extralight tracking-wide"
        >
          <span className="font-bold">noun </span>[
          <span className="italic">chook-woo-dee</span>]
        </motion.p>

        <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="leading-loose text-gray-300 md:text-2xl text-xl md:px-32 px-11 font-extralight tracking-wide"
        >
          I do things; primarily online content that includes creating websites like {" "}
          <span className="group text-gray-300 transition-all duration-300 ease-in-out">
            <span className="">
              <NavLink
                to="https://www.blackgourd.com"
                target="_blank"
                rel="noopener"
                className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out hover:text-sienna"
              >
                Black Gourd
              </NavLink>
            </span>
          </span>
          , host a podcast and try to catalogue all things Black on{" "}
          <span className="group text-gray-300 transition-all duration-300 ease-in-out">
            <span className="">
              <NavLink
                to="https://blackside.uk"
                target="_blank"
                rel="noopener"
                className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out hover:text-sienna"
              >
                blackside UK
              </NavLink>
            </span>
          </span>{" "}
          (and on{" "}
          <span className="group text-gray-300 transition-all duration-300 ease-in-out">
            <span className="">
              <NavLink
                to="https://www.otherexpats.com"
                target="_blank"
                rel="noopener"
                className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out hover:text-sienna"
              >
                Other Expats
              </NavLink>
            </span>
          </span>
          ). You can find some of my editorial and copywriting work in the <span className="group text-gray-300 transition-all duration-300 ease-in-out">
            <span className="">
              <NavLink
                to="/journal"
                className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out hover:text-sienna"
              >
                journal
              </NavLink>
            </span>
          </span> and in my selection of previous <span className="group text-gray-300 transition-all duration-300 ease-in-out">
            <span className="">
              <NavLink
                to="/projects"
                className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out hover:text-sienna"
              >
                projects
              </NavLink>
            </span>
          </span>.
        </motion.p>

        {/* <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="leading-loose text-gray-300 md:text-3xl text-2xl md:px-32 px-11 font-extralight tracking-wide"
        >
          What I do
        </motion.p> */}
        {/* <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="leading-loose text-gray-300 md:text-2xl text-xl md:px-32 px-11 font-extralight tracking-wide"
        >
          I believe in doing a diverse range of things. That way, there&apos;s
          always something exciting happening and if you crash too much for too
          long in one thing, you can do something else temporarily without
          hurting your feelings (not too badly, at least).
        </motion.p> */}
        <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="leading-loose text-gray-300 md:text-3xl text-2xl md:px-32 px-11 font-extralight tracking-wide"
        >
          Things I like
        </motion.p>
        <div className="grid md:grid-cols-2 leading-loose text-gray-300 md:text-2xl text-xl md:px-32 px-11 font-extralight tracking-wide">
          <ul className="list-disc list-inside">
            <li>Listening to recorded words</li>
            <li>Walking</li>
            <li>Lists</li>
            <li>Reading words on pages</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Soft cheese</li>
            <li>Photography</li>
            <li>Running</li>
          </ul>
        </div>
        <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="leading-loose text-gray-300 md:text-2xl text-xl md:px-32 px-11 font-extralight tracking-wide"
        >
          ps. If you want to say hi, you can email me at{" "}
          <span className="group text-gray-300 transition-all duration-300 ease-in-out">
            <span className="">
              <NavLink
                to="mailto:ndeewo@chukwudibarrah.com"
                className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out hover:text-sienna"
              >
                ndeewo@chukwudibarrah.com
              </NavLink>
            </span>
          </span>{" "}
          or use the contact form below.
        </motion.p>
      </div>
    </div>
  );
}
