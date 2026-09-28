import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import NewHere from "./pages/NewHere.jsx";
import Sermons from "./pages/Sermons.jsx";
import Events from "./pages/Events.jsx";
import Ministries from "./pages/Ministries.jsx";
import Give from "./pages/Give.jsx";
import Prayer from "./pages/Prayer.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new" element={<NewHere />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="events" element={<Events />} />
        <Route path="ministries" element={<Ministries />} />
        <Route path="give" element={<Give />} />
        <Route path="prayer" element={<Prayer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="signup" element={<Navigate to="/register" replace />} />
      </Route>
    </Routes>
  );
}
