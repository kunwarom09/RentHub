import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Rent } from "./pages/rent_room";
import { Contact } from "./pages/contact_us";
import { Sign } from "./pages/sign_up";
import { Properties } from './pages/properties';

function App() {
  return (
      <div className="app_container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/rent_room" element={<Rent />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/sign_up" element={<Sign />} />
        </Routes>
      </div>
  )
}

export default App;
