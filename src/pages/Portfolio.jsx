import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-[#7C9070]"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{opacity: 1}}
    >
      <p className="absolute z-0 text-[250px] leading-[200px] md:text-[500px] md:leading-[400px] opacity-5 text-gray-200 font-extrabold select-none">
        port
        <br />
        <span className="md:ml-14">folio</span>
      </p>
      <h1>A selection of what I&apos;ve worked on</h1>
    </motion.div>
  );
}
