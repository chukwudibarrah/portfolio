import "./App.css";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Drawer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
