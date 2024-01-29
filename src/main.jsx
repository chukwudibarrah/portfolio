// main.jsx
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Journal from "./pages/Journal.jsx";
import Post from "./pages/Post.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize('G-141ZFEMEVE');

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<Post />} />
      </Route>
    </Routes>
  </Router>
);
