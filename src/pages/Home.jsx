import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { container, item } from "../features/Animation";
import { NavLink } from "react-router-dom";
import { trackLinkClick } from "../utils/Analytics";

const greetings = [
  "Hello!",
  "Nǐ hǎo!",
  "Bonjour!",
  "Nde-ewo!",
  "Sawubona!",
  "Hola!",
  "Namastē!",
  "Salam!",
  "Konnichiwa!",
  "Shalom!",
  "Marhaba!",
  "Guten tag",
];

export default function Home() {
  // Track GA4 link clicks

  const handleLinkClick = () => {
    trackLinkClick("Home page link");
  };

  return (
    <main className="min-h-screen w-screen overscroll-none overflow-hidden flex flex-col items-center justify-center bg-charcoal">
      <p className="fixed z-0 text-[110px] leading-[90px] md:text-[350px] md:leading-[250px] opacity-5 text-gray-200 font-extrabold select-none">
        chukwudi
        <br />
        barrah
      </p>
      <div>
        <h1 className="text-6xl text-brown pt-28 md:pt-0 md:text-[170px] font-bold z-40 font-outfit">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            className="text-4xl"
            onInit={(typewriter) => {
              greetings.forEach((greeting, index) => {
                typewriter.typeString(greeting).pauseFor(3000).deleteAll();
                if (index === greetings.length - 1) {
                  typewriter.start();
                }
              });
            }}
          />
        </h1>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="overflow-hidden"
      >
        <motion.p
          variants={item}
          className="text-gray-300 font-extralight my-10 px-10 lg:px-96 leading-relaxed text-lg md:text-3xl text-center z-20 font-zilla"
        >
          Editor, web developer, amateur photographer, avid hiker, tech
          enthusiast and eternal student, passionate about building, creating
          and problem-solving.
          <br />
          My name is Chukwudi Barrah and I believe in doing a diverse range of
          work.
        </motion.p>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "100%" }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="overflow-hidden text-center mt-20 md:mt-28 group text-gray-300 transition-all duration-300 ease-in-out"
        >
          <NavLink
            reloadDocument
            to="/projects"
            className="font-extralight font-zilla text-gray-300 text-lg md:text-3xl bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out z-40 hover:text-sienna"
            onClick={handleLinkClick}
          >
            See selected projects
          </NavLink>
        </motion.div>
      </motion.div>
    </main>
  );
}
