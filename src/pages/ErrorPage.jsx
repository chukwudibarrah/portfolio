import { useRouteError } from "react-router-dom";
// import { motion } from "framer-motion";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="min-h-screen w-screen overscroll-none flex flex-col items-center justify-center bg-[#7C9070]"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
