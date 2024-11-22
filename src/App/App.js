import "./App.css";

// import react-router-dom
import { Route, Routes } from "react-router-dom";  // Change Switch to Routes

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />  {/* Use element instead of component */}
        <Route path="/rooms/" element={<Room />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />  {/* Handle 404 */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
