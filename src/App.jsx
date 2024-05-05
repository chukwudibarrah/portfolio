import "./App.css";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import SEO from "./utils/SEO";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <SEO
        title="Chukwudi Barrah"
        description="Web editor, developer and copywriter; passionate about building, creating and problem-solving."
        name="@cbarrah"
        type="website"
        imageUrl="https://raw.githubusercontent.com/chukwudibarrah/portfolio/main/public/uploads/chukwudibarrah.webp"
        url="https://chukwudibarrah.com"
      />
      <Drawer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
