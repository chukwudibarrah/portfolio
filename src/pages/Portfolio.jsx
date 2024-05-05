import { motion } from "framer-motion";
import SEO from "../utils/SEO";

export default function Portfolio() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-[#7C9070]"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{opacity: 1}}
    >
      <SEO
        title="Portfolio | Chukwudi Barrah"
        description="A selection of some of my past and ongoing works"
        name="@cbarrah"
        type="website"
        imageUrl="https://raw.githubusercontent.com/chukwudibarrah/portfolio/main/public/uploads/chukwudibarrah.webp"
        url="https://chukwudibarrah.com/projects"
      />
      <p className="absolute z-0 text-[250px] leading-[200px] md:text-[500px] md:leading-[400px] opacity-5 text-gray-200 font-extrabold select-none">
        port
        <br />
        <span className="md:ml-14">folio</span>
      </p>
      <h1>A selection of projects I&apos;ve worked on</h1>
    </motion.div>
  );
}
