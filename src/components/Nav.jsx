import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

export default function Nav({ handleHideDrawer }) {
  return (
    <nav className="min-h-screen w-screen overscroll-none overflow-hidden flex items-center z-30 font-outfit">
      <p className="absolute -z-10 text-[130px] leading-[200px] md:text-[400px] md:leading-[400px] opacity-5 text-gray-200 font-extrabold">
        menu
      </p>
      <div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 17, duration: 1.5 }}
          className="md:ml-16 md:w-5/12 hover:drop-shadow-2xl"
        >
          <NavLink
            to="/"
            className="text-5xl md:text-8xl font-black uppercase hover::bg-brown tracking-widest leading-6 md:leading-[60px]"
            onClick={() => handleHideDrawer()}
          >
            chukwudi barrah
          </NavLink>
        </motion.div>

        <motion.div>
          <ul className="mt-10 md:ml-16">
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/projects"
                className="text-5xl md:text-7xl font-semibold bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Projects
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1.15 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/resume"
                className="text-5xl md:text-7xl font-semibold bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Resume
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1.15 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/journal"
                className="text-5xl md:text-7xl font-semibold bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Journal
              </NavLink>
            </motion.li>
          </ul>
          <div className="flex md:justify-center mt-10 md:mt-20 w-screen">
            <a href="https://www.linkedin.com/in/cbarrah/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="linkedin"
                stroke="none"
                className="w-8 h-8 mr-10 mt-10 md:mt-16 fill-charcoal"
              >
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/dude.with.a.camera/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="instagram"
                stroke="none"
                className="w-8 h-8 mr-10 mt-10 md:mt-16 fill-charcoal"
              >
                <path
                  d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"
                  fill="#595bd4"
                  className="fill-charcoal svgShape"
                ></path>
              </svg>
            </a>
            <a href="https://github.com/chukwudibarrah">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="github"
                stroke="none"
                className="w-8 h-8 mr-10 mt-10 md:mt-16 fill-charcoal"
              >
                <path
                  d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
                  fill="#595bd4"
                  className="fill-charcoal svgShape"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
