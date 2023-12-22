import { useState } from "react";
import Nav from "./Nav";

export default function Drawer() {
  const [showDrawer, setShowDrawer] = useState(false);

  function handleHideDrawer() {
    setShowDrawer(!showDrawer)
  }

  // handle showing and hiding the drawer on click 

  return (
    <>
      {showDrawer ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-14 h-14 flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50 stroke-2 stroke-brown hover:drop-shadow-2xl"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setShowDrawer(!showDrawer)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-14 h-14 fixed z-30 flex items-center cursor-pointer left-10 top-6 stroke-2 stroke-brown hover:drop-shadow-2xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      )}

{/* Pass the hide/unhide state to the nav component to allow hiding the drawer from the nav component */}

      <div
        className={`top-0 left-0 overscroll-none overflow-hidden min-w-screen bg-sienna p-10 pl-15 text-charcoal fixed min-h-screen z-40 ease-in-out duration-700 ${
          showDrawer ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <Nav handleHideDrawer={handleHideDrawer} />
      </div>
    </>
  );
}
