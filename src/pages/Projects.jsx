// import { useState, useEffect } from "react";
// import axios from "axios";
import FetchProjects from "../components/FetchProjects";

export default function Projects() {
  return (
    <div className="min-h-screen w-screen overscroll-none bg-charcoal">
      <div className="text-4xl text-brown lg:text-7xl font-zilla py-28 md:mx-28 mx-4">
        <h1>
          A selection of past and ongoing projects
        </h1>
      </div>
      <FetchProjects />
    </div>
  );
}
