import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/about_us";
import { Rent } from "./pages/rent_room";
import { Contact } from "./pages/contact_us";
import { Sign } from "./pages/sign_up";

function App() {
  return (
      <div className="app_container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About/>} />
        <Route path="/rent_room" element={<Rent />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/sign_up" element={<Sign />} />
        </Routes>
      </div>
  )
}

export default App;
